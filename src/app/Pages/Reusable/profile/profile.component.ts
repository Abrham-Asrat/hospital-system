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
    this.router.navigate(['/Dhome']); // Make sure this route exists in your Angular routing module
  }

  logout() {
    this.router.navigate(['/landing']); // Adjust to your actual logout/landing page
  }
}
