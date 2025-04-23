/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PlanningService } from './planning.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Planning', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanningService, provideHttpClient()],
    });
  });

  it('should ...', inject([PlanningService], (service: PlanningService) => {
    expect(service).toBeTruthy();
  }));
});
