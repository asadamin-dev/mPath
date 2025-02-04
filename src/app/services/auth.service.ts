import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = 'Auth';

  constructor(private router: Router, private http: HttpService) { }

  login(cred: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.endpoint}/Login`, cred);
  }

  patientLogin(cred: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.endpoint}/Login/Patient`, cred);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
