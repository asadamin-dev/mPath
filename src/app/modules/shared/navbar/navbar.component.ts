import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMobile = false;

  constructor(private router: Router) {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
