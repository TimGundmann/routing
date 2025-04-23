/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveButtonComponent } from './solve-button.component';
import { provideHttpClient } from '@angular/common/http';

describe('SolveButtonComponent', () => {
  let component: SolveButtonComponent;
  let fixture: ComponentFixture<SolveButtonComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SolveButtonComponent],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
