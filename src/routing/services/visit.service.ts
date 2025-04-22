import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VisitService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    const url = `${this.baseUrl}/visits`;
    return this.http.get<any[]>(url);
  }

  get(id: string): Observable<any> {
    const url = `${this.baseUrl}/visits/${id}`;
    return this.http.get<any>(url);
  }

  add(visit: any): Observable<any> {
    const url = `${this.baseUrl}/visits`;
    return this.http.put<any>(url, visit);
  }
}
