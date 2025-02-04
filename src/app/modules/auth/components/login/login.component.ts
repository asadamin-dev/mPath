import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  hidePassword = true; // toggles password visibility

  onSubmit() {
    // Placeholder login logic:
    if (this.username && this.password) {
      console.log('Logging in with', this.username, this.password);
      // Implement your authentication logic here
    } else {
      console.log('Please enter username and password');
    }
  }
}
