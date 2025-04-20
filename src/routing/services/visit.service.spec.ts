/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { VisitService } from './visit.service';

describe('Service: Map', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitService],
    });
  });

  it('should ...', inject([VisitService], (service: VisitService) => {
    expect(service).toBeTruthy();
  }));
});
