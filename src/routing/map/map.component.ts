import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../services/map.service';
import { VehicleService } from '../services/vehicle.service';
import { VisitService } from '../services/visit.service';
import { MapCommunicationService } from '../services/map-communication.service';
import { Location } from './location';
import { MapEventType } from '../services/map-event';
import {
  combineLatestAll,
  concatMap,
  from,
  map,
  Observable,
  toArray,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(
    private vehicleService: VehicleService,
    private visitService: VisitService,
    private mapService: MapService,
    private vehicleCommunicationService: MapCommunicationService
  ) {}

  ngOnInit() {
    this.vehicleCommunicationService.mapUpdate$.subscribe((event) => {
      if (event.type === MapEventType.SELECT_VEHICLE) {
        this.updateVehicle(event.payload);
      } else if (event.type === MapEventType.UPDATE_MAP) {
        this.ngAfterViewInit();
      }
    });
  }

  ngAfterViewInit(): void {
    this.vehicleService.getAll().subscribe((vehicles) => {
      this.setupMap();
      from(vehicles)
        .pipe(
          concatMap((vehicle) => this.plotInVehicle(vehicle)),
          toArray()
        )
        .subscribe((allLocations) => {
          const flattenedLocations = allLocations.flat();
          this.mapService.zoomToFitAll(flattenedLocations);
        });
    });
  }

  private plotInVehicle(vehicle: any): Observable<Location[]> {
    return this.plotInVisits(
      vehicle.visits,
      vehicle.routeColor ? vehicle.routeColor : 'blue'
    ).pipe(
      map((locations) => {
        this.mapService.makeMarkerIcon(
          vehicle.homeAddress.location,
          `<div>${vehicle.name}</div>`
        );
        return locations.concat(vehicle.homeAddress.location);
      })
    );
  }

  private plotInVisits(
    visists: any[],
    color: string = 'blue'
  ): Observable<Location[]> {
    const visitObservables = visists.map((visitId) => {
      return this.visitService.get(visitId).pipe(
        map((visit) => {
          this.mapService.makeMarkerIcon(
            visit.locationAddress.location,
            `<div>${visit.locationAddress.addressLine1}</div>
         <div>${visit.locationAddress.postalCode} ${visit.locationAddress.city}</div>`
          );
          if (visit.geometry) {
            this.mapService.drawRoutes(visit.geometry, color);
          }
          return visit.locationAddress.location;
        })
      );
    });
    return from(visitObservables).pipe(combineLatestAll());
  }

  private updateVehicle(vehicleId: any) {
    if (vehicleId === 'all') {
      this.ngAfterViewInit();
    } else if (vehicleId === '') {
      this.setupMap();
      this.visitService.getAll().subscribe((visits) => {
        this.plotInVisits(visits.map((visit) => visit.id)).subscribe(
          (locations) => this.mapService.zoomToFitAll(locations)
        );
      });
    } else {
      this.setupMap();
      this.vehicleService.get(vehicleId).subscribe((vehicle) => {
        this.plotInVehicle(vehicle).subscribe((locations) => {
          this.mapService.zoomToFitAll([
            ...locations,
            vehicle.homeAddress.location,
          ]);
        });
      });
    }
  }

  private setupMap(): void {
    this.mapService.setupMap('map', new Location(55.6761, 12.5683));
  }
}
