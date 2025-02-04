import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class HealthcareService {
  private endpoint = 'Users'; // API endpoint

  constructor(private httpService: HttpService) {}

  createProf(data: any): Observable<any> {
    return this.httpService.post<any>(this.endpoint, data);
  }

  getProf(): Observable<any> {
    return this.httpService.get<any>(this.endpoint);
  }

  updateProf(id: string, data: any): Observable<any> {
    return this.httpService.put<any>(`${this.endpoint}/${id}`, data);
  }

  deleteProf(id: string): Observable<any> {
    return this.httpService.delete<any>(`${this.endpoint}/${id}`);
  }
}
