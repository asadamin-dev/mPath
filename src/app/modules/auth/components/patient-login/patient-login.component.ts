import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.scss',
})
export class PatientLoginComponent {
  email = '';
  password = '';
  hidePassword = true; // toggles password visibility

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    if (!this.email || !this.password) {
      console.log('Please enter both email and password');
      return;
    }

    try {
      const response = await firstValueFrom(
        this.authService.patientLogin({
          email: this.email,
          password: this.password,
        })
      );

      console.log('Login successful:', response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/patient']);
    } catch (err) {
      console.error('Login failed:', err);
    }
  }

  goto(route: string) {
    this.router.navigate([route]);
  }
}
