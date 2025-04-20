/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SolveButtonComponent } from './solve-button.component';

describe('SolveButtonComponent', () => {
  let component: SolveButtonComponent;
  let fixture: ComponentFixture<SolveButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolveButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
