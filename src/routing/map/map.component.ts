import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../services/map.service';
import { VehicleService } from '../services/vehicle.service';
import { VisitService } from '../services/visit.service';
import { VehicleCommunicationService } from '../services/vehicle-communication.service';
import { Location } from './location';

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
    private vehicleCommunicationService: VehicleCommunicationService
  ) {}

  ngOnInit() {
    this.vehicleCommunicationService.vehicleSelected$.subscribe((vehicleId) => {
      if (vehicleId === 'all') {
        this.ngAfterViewInit();
      } else if (vehicleId === '') {
        this.visitService.getAll().subscribe((visits) => {
          this.setupMap();
          this.plotInVisits(visits.map((visit) => visit.id));
        });
      } else {
        this.vehicleService.get(vehicleId).subscribe((vehicle) => {
          this.setupMap();
          this.plotInVehicle(vehicle);
        });
      }
    });
  }

  ngAfterViewInit(): void {
    this.vehicleService.getAll().subscribe((vehicle) => {
      this.setupMap();
      vehicle.forEach((vehicle) => this.plotInVehicle(vehicle));
    });
  }

  private plotInVehicle(vehicle: any) {
    this.plotInVisits(
      vehicle.visits,
      vehicle.routeColor ? vehicle.routeColor : 'blue'
    );
    this.mapService.makeMarkerIcon(
      vehicle.homeAddress.location,
      `<div>${vehicle.name}</div>`
    );
  }

  private plotInVisits(visists: any[], color: string = 'blue'): void {
    visists.forEach((visitId) => {
      this.visitService.get(visitId).subscribe((visit) => {
        this.mapService.makeMarkerIcon(
          visit.locationAddress.location,
          `<div>${visit.locationAddress.addressLine1}</div>
         <div>${visit.locationAddress.postalCode} ${visit.locationAddress.city}</div>`
        );
        if (visit.geometry) {
          this.mapService.drawRoutes(visit.geometry, color);
        }
      });
    });
  }

  private setupMap(): void {
    this.mapService.setupMap('map', new Location(55.6761, 12.5683));
  }
}
