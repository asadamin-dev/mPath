import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
private endpoint = 'Users'; // API endpoint

  constructor(private httpService: HttpService) {}

  createUser(data: any): Observable<any> {
    return this.httpService.post<any>(this.endpoint, data);
  }

  getUsers(): Observable<any> {
    return this.httpService.get<any>(this.endpoint);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.httpService.put<any>(`${this.endpoint}/${id}`, data);
  }

  deleteUser(id: string): Observable<any> {
    return this.httpService.delete<any>(`${this.endpoint}/${id}`);
  }
}
