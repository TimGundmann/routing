/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateVisitButtonComponent } from './create-visit-button.component';
import { provideHttpClient } from '@angular/common/http';

describe('CreateVisitButtonComponent', () => {
  let component: CreateVisitButtonComponent;
  let fixture: ComponentFixture<CreateVisitButtonComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CreateVisitButtonComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVisitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
