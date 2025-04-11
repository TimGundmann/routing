import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  getServiceData(): Observable<any[]> {
    const url = '/visits'; // Replace with the actual endpoint URL
    return this.http.get<any[]>(url);
  }
}
