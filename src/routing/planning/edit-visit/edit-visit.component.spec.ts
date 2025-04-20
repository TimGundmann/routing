/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditVisitComponent } from './edit-visit.component';

describe('EditVisitComponent', () => {
  let component: EditVisitComponent;
  let fixture: ComponentFixture<EditVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
