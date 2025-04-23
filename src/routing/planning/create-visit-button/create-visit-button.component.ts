import { Component } from '@angular/core';
import { VisitService } from '../../services/visit.service';
import { EditVisitComponent } from '../edit-visit/edit-visit.component';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MapCommunicationService } from '../../services/map-communication.service';

@Component({
  selector: 'app-create-visit-button',
  imports: [MatDialogModule, MatButton],
  standalone: true,
  templateUrl: './create-visit-button.component.html',
  styleUrls: ['./create-visit-button.component.css'],
})
export class CreateVisitButtonComponent {
  constructor(
    private dialog: MatDialog,
    private visitService: VisitService,
    private mapCommunicationService: MapCommunicationService
  ) {}

  openEditVisitDialog(): void {
    const dialogRef = this.dialog.open(EditVisitComponent, {
      width: '500px',
      data: { locationAddress: {} },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.visitService
          .add(result)
          .subscribe(() => this.mapCommunicationService.updateMap());
      }
    });
  }
}
