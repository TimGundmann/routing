import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { VehicleService } from '../../services/vehicle.service';
import { MapCommunicationService } from '../../services/map-communication.service';

@Component({
  selector: 'app-vehicle-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  templateUrl: './vehicle-selector.component.html',
  styleUrls: ['./vehicle-selector.component.css'],
})
export class VehicleSelectorComponent implements OnInit {
  menuOpen: boolean = false;
  selectedVehicle: string = 'All Vehicle';
  vehicles: { name: string; id: string }[] = [];

  constructor(
    private vehicleService: VehicleService,
    private mapCommunicationService: MapCommunicationService
  ) {}

  onSelect(selection: { name: string; id: string }): void {
    this.selectedVehicle = selection.name;
    this.mapCommunicationService.selectVehicle(selection.id);
  }

  toggelMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe((vehicles) => {
      this.vehicles = vehicles.map((vehicle) => ({
        name: vehicle.name,
        id: vehicle.id,
      }));
      this.vehicles.unshift({ name: 'Only Visits', id: '' });
      this.vehicles.unshift({ name: 'All Vehicles', id: 'all' });
    });
  }
}
