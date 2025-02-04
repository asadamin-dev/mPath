import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;

  constructor(private router: Router, private http: HttpService) {}

  login(user: { email: string; password: string }) {
    this.http.post;
  }

  getUserRole(): string {
    return 'healthcare';
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
