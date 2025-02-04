import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {
private endpoint = 'Recommendations'; // API endpoint

  constructor(private httpService: HttpService) {}

  createRecommendation(data: any): Observable<any> {
    return this.httpService.post(this.endpoint, data);
  }

  getRecommendation(): Observable<any> {
    return this.httpService.get(this.endpoint);
  }
  

  updateRecommendation(id: string, data: any): Observable<any> {
    return this.httpService.put(`${this.endpoint}/${id}`, data);
  }

  deleteRecommendation(id: string): Observable<any> {
    return this.httpService.delete(`${this.endpoint}/${id}`);
  }
}
