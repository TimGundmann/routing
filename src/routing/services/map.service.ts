import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { Location } from '../map/location';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: L.Map | null = null;

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

    L.marker(new L.LatLng(location.latitude, location.longitude), { icon })
      .addTo(this.map!)
      .bindPopup(decription);
  }

  zoomToFitAll(locations: Location[]) {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map(
          (location) => new L.LatLng(location.latitude, location.longitude)
        )
      );
      this.map!.fitBounds(bounds, { padding: [100, 100] });
    }
  }

  public drawRoutes(route: string, color: string): void {
    L.geoJSON(JSON.parse(route), {
      style: {
        color,
        weight: 4,
        opacity: 0.8,
      },
    }).addTo(this.map!);
  }
}
