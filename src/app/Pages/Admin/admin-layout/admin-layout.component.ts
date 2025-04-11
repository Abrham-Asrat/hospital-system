import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink, // Add this for routerLink binding
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule // Add this for mat-menu
  ],
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  navItems = [
    { path: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/users', icon: 'people', label: 'User Management' },
    { path: '/admin/appointments', icon: 'calendar_today', label: 'Appointments' },
    { path: '/admin/payments', icon: 'payments', label: 'Payments' },
    { path: '/admin/blogs', icon: 'library_books', label: 'Blog Management' },  // Added Blog Management
    { path: '/admin/settings', icon: 'settings', label: 'Settings' }
  ];
  
  isMobileMenuOpen = false;
}
