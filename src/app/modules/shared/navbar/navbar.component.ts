import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isMobile = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private authService: AuthService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize(); // ✅ Only runs if in browser
    }
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768; // ✅ Safe to access window
    }
  }

  changePassword() {
    this.router.navigate(['/change-password']);
  }

  logout() {
    this.authService.logout();
  }
}
