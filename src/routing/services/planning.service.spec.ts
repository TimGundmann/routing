/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanningService } from './planning.service';

describe('Service: Planning', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanningService]
    });
  });

  it('should ...', inject([PlanningService], (service: PlanningService) => {
    expect(service).toBeTruthy();
  }));
});
