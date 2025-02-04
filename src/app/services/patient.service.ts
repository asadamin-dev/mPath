import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpService } from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private endpoint = 'Patients'; // API endpoint


  constructor(private httpService: HttpService) { }

  createPatient(data: any): Observable<any> {
    return this.httpService.post(this.endpoint, data);
  }

  getPatients(): Observable<any> {
    return this.httpService.get(this.endpoint);
  }

  getPatientById(id: string): Observable<any> {
    return this.httpService.get(`${this.endpoint}/${id}`,);
  }


  updatePatient(id: string, data: any): Observable<any> {
    return this.httpService.put(`${this.endpoint}/${id}`, data);
  }

  deletePatient(id: string): Observable<any> {
    return this.httpService.delete(`${this.endpoint}/${id}`);
  }
}
