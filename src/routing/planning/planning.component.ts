import { Component } from '@angular/core';
import { CreateVisitButtonComponent } from './create-visit-button/create-visit-button.component';
import { CreateVehicleButtonComponent } from './create-vehicle-button/create-vehicle-button.component';
import { VehicleSelectorComponent } from './vehicle-selector/vehicle-selector.component';
import { SolveButtonComponent } from './solve-button/solve-button.component';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [
    CreateVisitButtonComponent,
    CreateVehicleButtonComponent,
    VehicleSelectorComponent,
    SolveButtonComponent,
  ],
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
})
export class PlanningComponent {
  constructor() {}
}
