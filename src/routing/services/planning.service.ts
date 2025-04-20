import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  constructor(private http: HttpClient) {}

  start(): Observable<string> {
    return this.http.post<string>('/planning', {});
  }

  stop(jobId: string): Observable<any> {
    return this.http.delete<any>(`/planning/${jobId}`, {});
  }
}
