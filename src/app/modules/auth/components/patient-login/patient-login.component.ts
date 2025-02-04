import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.scss'
})
export class PatientLoginComponent {
 username = '';
  password = '';
  hidePassword = true; // toggles password visibility

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      console.log('Please enter both username and password');
      return;
    }

    this.authService
      .login({ username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);

          localStorage.setItem('token', response.token);

          // Navigate based on role
          const role = response.role;
          switch (role) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'healthcare':
              this.router.navigate(['/healthcare']);
              break;
            case 'patient':
              this.router.navigate(['/patient']);
              break;
            default:
              this.router.navigate(['/auth']);
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
        },
      });
  }

  goto(route:string ){
    this.router.navigate([route]);
  }
}
