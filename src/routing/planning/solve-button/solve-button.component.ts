import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PlanningService } from '../../services/planning.service';

@Component({
  selector: 'app-solve-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './solve-button.component.html',
  styleUrls: ['./solve-button.component.css'],
})
export class SolveButtonComponent {
  solving: boolean = false;
  private currentJobId: string = '';

  constructor(private planningService: PlanningService) {}

  makeRoutes() {
    this.solving = !this.solving;
    if (this.solving) {
      this.planningService
        .start()
        .subscribe((jobId) => (this.currentJobId = jobId));
    } else {
      this.planningService.stop(this.currentJobId).subscribe();
    }
  }
}
