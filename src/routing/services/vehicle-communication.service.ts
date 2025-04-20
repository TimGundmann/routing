import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleCommunicationService {
  private vehicleSelectedSource = new Subject<string>();
  vehicleSelected$ = this.vehicleSelectedSource.asObservable();

  selectVehicle(vehicleId: string): void {
    this.vehicleSelectedSource.next(vehicleId);
  }
}
