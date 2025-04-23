/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { VisitService } from './visit.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: Visit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitService, provideHttpClient()],
    });
  });

  it('should ...', inject([VisitService], (service: VisitService) => {
    expect(service).toBeTruthy();
  }));
});
