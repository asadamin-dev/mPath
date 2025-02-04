import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
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
        this.authService.login({
          email: this.email,
          password: this.password,
        })
      );

      localStorage.setItem('token', response.token);
      localStorage.setItem('roleId', response.roleId);
      localStorage.setItem('userId', response.userid);

      if (response.roleId == 1) {
        this.router.navigate(['/admin']);
      } else if (response.roleId == 2) {
        this.router.navigate(['/healthcare']);
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  }

  goto(route: string) {
    this.router.navigate([route]);
  }
}
