import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;

  login(user: { email: string; password: string }): boolean {
    if (user.email === 'admin@example.com') {
      this.userRole = 'admin';
    } else if (user.email === 'healthcare@example.com') {
      this.userRole = 'healthcare';
    } else {
      this.userRole = 'patient';
    }
    return true;
  }

  getUserRole(): string {
    return 'healthcare';
  }
}
