import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from '../routing/map/map.component';
import { PlanningComponent } from '../routing/planning/planning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, PlanningComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'routing';
}
