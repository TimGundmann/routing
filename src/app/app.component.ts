import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from '../routing/map/map.component';
import { EditVisitComponent } from '../routing/visit/edit-visit/edit-visit.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent, EditVisitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'routing';
}
