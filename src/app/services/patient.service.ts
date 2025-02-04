import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private endpoint = 'Patients'; // API endpoint

  constructor(private httpService: HttpService) {}

  createPatient(data: any): Observable<any> {
    return this.httpService.post<any>(this.endpoint, data);
  }

  getPatients(): Observable<any> {
    return this.httpService.get<any>(this.endpoint);
  }

  updatePatient(id: string, data: any): Observable<any> {
    return this.httpService.put<any>(`${this.endpoint}/${id}`, data);
  }

  deletePatient(id: string): Observable<any> {
    return this.httpService.delete<any>(`${this.endpoint}/${id}`);
  }
}
