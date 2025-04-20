import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-address',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css'],
})
export class EditAddressComponent implements OnInit {
  @Input() address!: any;

  constructor() {}

  ngOnInit() {}
}
