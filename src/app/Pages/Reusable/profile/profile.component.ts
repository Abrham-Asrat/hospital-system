import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router: Router) {}

  goToDhome() {
    this.router.navigate(['/dashboard']); // Adjust the route path as needed
  }
  logout() {
    // Optional: Clear local storage/session storage if you're using authentication
    localStorage.clear();

    // Navigate to login page
    this.router.navigate(['/login']);
}
}