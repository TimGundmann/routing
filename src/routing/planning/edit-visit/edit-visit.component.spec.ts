/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditVisitComponent } from './edit-visit.component';
import { provideHttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('EditVisitComponent', () => {
  let component: EditVisitComponent;
  let fixture: ComponentFixture<EditVisitComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [EditVisitComponent],
      providers: [
        provideHttpClient(),
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            locationAddress: {
              addressLine1: '123 Main St',
              addressLine2: 'Apt 4B',
              city: 'New York',
              postalCode: '10001',
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
