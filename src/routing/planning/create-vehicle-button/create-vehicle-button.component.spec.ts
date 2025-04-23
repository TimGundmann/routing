/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateVehicleButtonComponent } from './create-vehicle-button.component';
import { provideHttpClient } from '@angular/common/http';

describe('CreateVehicleButtonComponent', () => {
  let component: CreateVehicleButtonComponent;
  let fixture: ComponentFixture<CreateVehicleButtonComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CreateVehicleButtonComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
