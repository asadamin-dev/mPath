import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = 'Auth';

  constructor(private router: Router, private http: HttpService) {}

  login(credentials: {
    credentials: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.endpoint}/Login`, credentials);
  }

  patientLogin(credentials: {
    credentials: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.endpoint}/Login/Patient`, credentials);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
