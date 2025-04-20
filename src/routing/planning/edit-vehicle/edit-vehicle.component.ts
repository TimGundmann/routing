import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { EditAddressComponent } from '../edit-address/edit-address.component';
import { NgxColorsModule } from 'ngx-colors';

@Component({
  selector: 'app-edit-vehicle',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    EditAddressComponent,
    NgxColorsModule,
  ],

  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css'],
})
export class EditVehicleComponent {
  color: string = '#0000FF';
  departureTime: string = '07:00';

  constructor(
    public dialogRef: MatDialogRef<EditVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public vehicle: any
  ) {}

  onSave(): void {
    this.vehicle.departureTime = this.departureTime;
    this.vehicle.color = this.color;
    this.dialogRef.close(this.vehicle);
  }
}
