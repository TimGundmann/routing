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

@Component({
  selector: 'app-edit-visit',
  standalone: true,
  templateUrl: './edit-visit.component.html',
  styleUrls: ['./edit-visit.component.css'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    EditAddressComponent,
  ],
})
export class EditVisitComponent {
  pickupDate: string = new Date().toISOString().split('T')[0];
  minStartTime: string = '08:00';
  maxEndTime: string = '16:00';
  serviceDuration: string = '00:05';

  constructor(
    public dialogRef: MatDialogRef<EditVisitComponent>,
    @Inject(MAT_DIALOG_DATA) public visit: any
  ) {}

  onSave(): void {
    // Populate or modify the visit object
    this.visit.minStartTime = this.toIsoDateTime(
      this.pickupDate,
      this.minStartTime
    );
    this.visit.maxEndTime = this.toIsoDateTime(
      this.pickupDate,
      this.maxEndTime
    );
    this.visit.serviceDuration = this.serviceDuration;

    // Close the dialog and pass the updated visit object back to the parent
    this.dialogRef.close(this.visit);
  }

  private toIsoDateTime(date: string, time: string): string {
    // Combine the date and time strings into a single string
    const combined = `${date}T${time}:00`;

    // Create a new Date object
    const isoDateTime = new Date(combined);

    // Return the ISO string
    return isoDateTime.toISOString();
  }
}
