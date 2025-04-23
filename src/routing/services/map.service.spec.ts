/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MapService } from './map.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Map', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapService, provideHttpClient()],
    });
  });

  it('should ...', inject([MapService], (service: MapService) => {
    expect(service).toBeTruthy();
  }));
});
