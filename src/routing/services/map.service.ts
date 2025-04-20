import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: any;

  constructor(private http: HttpClient) {}

  setupMap(id: string, location: any): void {
    // Check if the map is already initialized
    if (this.map) {
      this.map.remove(); // Remove the existing map instance
    }

    // Initialize the map
    this.map = L.map(id).setView([location.latitude, location.longitude], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }

  makeMarkerIcon(location: any, decription: string): void {
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

  private fetchRoute(start: any, end: any) {
    const apiKey = 'YOUR_OPENROUTESERVICE_API_KEY'; // Replace with your API key
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`;

    return this.http.get<any>(url);
  }
}
