import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EditVehicleComponent } from '../edit-vehicle/edit-vehicle.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-create-vehicle-button',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './create-vehicle-button.component.html',
  styleUrls: ['./create-vehicle-button.component.css'],
})
export class CreateVehicleButtonComponent {
  constructor(
    private dialog: MatDialog,
    private vehicleService: VehicleService
  ) {}

  openEditVehicleDialog(): void {
    const dialogRef = this.dialog.open(EditVehicleComponent, {
      width: '500px',
      data: { homeAddress: {} },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.vehicleService.add(result).subscribe();
      }
    });
  }
}
