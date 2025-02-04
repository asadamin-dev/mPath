import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { debug } from 'console';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const userRole = authService.getUserRole();
  const allowedRoles = route.data['roles'] as string[];

  debugger;

  if (userRole && allowedRoles.includes(userRole)) {
    router.navigate([`/${userRole}`]);
    return true;
  }

  router.navigate(['/auth']);
  return false;
};
