import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    const url = `${this.baseUrl}/vehicles`;
    return this.http.get<any[]>(url);
  }

  add(vehicle: any): Observable<void> {
    const url = `${this.baseUrl}/vehicles`;
    return this.http.put<any>(url, vehicle);
  }

  get(id: string): Observable<any> {
    const url = `${this.baseUrl}/vehicles/${id}`;
    return this.http.get<any>(url);
  }
}
