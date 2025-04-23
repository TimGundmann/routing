import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Location } from '../map/location';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: any;

  constructor() {}

  setupMap(id: string, location: Location): void {
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map(id).setView(
      new L.LatLng(location.latitude, location.longitude),
      12
    );
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }

  makeMarkerIcon(location: Location, decription: string): void {
    const icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      shadowSize: [41, 41],
    });

    L.marker([location.latitude, location.longitude], { icon })
      .addTo(this.map)
      .bindPopup(decription);
  }

  public drawRoutes(route: string, color: string): void {
    L.geoJSON(JSON.parse(route), {
      style: {
        color,
        weight: 4,
        opacity: 0.8,
      },
    }).addTo(this.map);
  }
}
