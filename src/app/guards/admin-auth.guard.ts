// src/app/guards/admin-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // For development - always allow access
    // Comment this line out when ready for production
    return true;

    /* Uncomment this for production:
    const isAdmin = localStorage.getItem('userRole') === 'admin';
    if (!isAdmin) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
    */
  }
}