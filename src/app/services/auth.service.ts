import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;

  constructor(private router: Router, private http: HttpService) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post('/auth/login', credentials);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
