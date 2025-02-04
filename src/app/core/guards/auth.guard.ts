import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user && user.token) {
    // If a role-based route is being accessed, check if the user has permission
    if (route.data['roles'] && !route.data['roles'].includes(user.role)) {
      router.navigate(['/auth']);
      return false;
    }
    return true;
  }

  // const userRole = authService.getUserRole();
  // const allowedRoles = route.data['roles'] as string[];

  // if (userRole && allowedRoles.includes(userRole)) {
  //   return true;
  // }

  router.navigate(['/auth']);
  return false;
};
