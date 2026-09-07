import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const router = inject(Router);
  const isLocalDataPresent = localStorage.getItem('angular22User');

  if (isLocalDataPresent == null) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
