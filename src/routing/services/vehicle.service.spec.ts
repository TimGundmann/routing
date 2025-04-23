/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { VehicleService } from './vehicle.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Veicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleService, provideHttpClient()],
    });
  });

  it('should ...', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
});
