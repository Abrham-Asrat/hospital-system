import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  defaultImage = 'assets/images/image4.png'; // set a default image path
  previewUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/Doctor/Home']);
  }

  logout(): void {
      // Clear authentication data (like tokens, user info, etc.)
      localStorage.removeItem('authToken'); // Example: if you're storing token in localStorage
      sessionStorage.clear(); // Optional: clear session storage
      // You can also call an auth service here if you have one
  
      // Redirect to landing page
      this.router.navigate(['/']); // ← '/' usually points to your homepage/route           
    }
  }
