import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MapEvent, MapEventType } from './map-event';

@Injectable({
  providedIn: 'root',
})
export class MapCommunicationService {
  private mapUpdatesSource = new Subject<MapEvent>();
  mapUpdate$ = this.mapUpdatesSource.asObservable();

  selectVehicle(vehicleId: string): void {
    this.mapUpdatesSource.next({
      type: MapEventType.SELECT_VEHICLE,
      payload: vehicleId,
    });
  }

  updateMap(): void {
    this.mapUpdatesSource.next({
      type: MapEventType.UPDATE_MAP,
    });
  }
}
