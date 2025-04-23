/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditVehicleComponent } from './edit-vehicle.component';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { NgxColorsModule } from 'ngx-colors';

describe('EditVehicleComponent', () => {
  let component: EditVehicleComponent;
  let fixture: ComponentFixture<EditVehicleComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<EditVehicleComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        EditVehicleComponent,
        CommonModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        EditAddressComponent,
        NgxColorsModule,
      ],
      providers: [
        provideHttpClient(),
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { homeAddress: {} } },
      ],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(EditVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save and close with updated vehicle data via HTML input', () => {
    // given
    fillInputWith('Updated Vehicle', 'name');
    fillInputWith('200', 'capacity');
    fillInputWith('09:00', 'departureTime');
    component.color = '#00FF00';
    fixture.detectChanges();

    // when
    const saveButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('#save');
    saveButton.click();
    fixture.detectChanges();

    // then
    expect(dialogRefSpy.close).toHaveBeenCalledWith({
      homeAddress: {},
      name: 'Updated Vehicle',
      capacity: 200,
      color: '#00FF00',
      departureTime: '09:00',
    });
  });

  const fillInputWith = (input: string, elementName: string) => {
    const inputElement: HTMLInputElement = fixture.debugElement.query(
      By.css(`input[name="${elementName}"]`)
    ).nativeElement;
    inputElement.value = input;
    inputElement.dispatchEvent(new Event('input'));
  };
});
