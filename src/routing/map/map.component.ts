import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: any;

  constructor(private mapService: MapService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.mapService.getServiceData().subscribe((data) => {
      this.setupMap();
      this.plotInMarkser(data);
    });
  }

  private plotInMarkser(visists: any[]) {
    visists.forEach((visit) => {
      const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl:
          'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
      });

      L.marker(
        [
          visit.locationAddress.location.latitude,
          visit.locationAddress.location.longitude,
        ],
        { icon }
      )
        .addTo(this.map)
        .bindPopup(
          `<div>${visit.locationAddress.addressLine1}</div><div>${visit.locationAddress.postalCode} ${visit.locationAddress.city}</div>`
        )
        .openPopup();
    });
  }

  private setupMap(): void {
    this.map = L.map('map').setView([55.6761, 12.5683], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }
}
