/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MapComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
