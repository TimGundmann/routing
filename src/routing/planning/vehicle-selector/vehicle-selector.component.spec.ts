/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehicleSelectorComponent } from './vehicle-selector.component';
import { provideHttpClient } from '@angular/common/http';

describe('VehicleSelectorComponent', () => {
  let component: VehicleSelectorComponent;
  let fixture: ComponentFixture<VehicleSelectorComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [VehicleSelectorComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
