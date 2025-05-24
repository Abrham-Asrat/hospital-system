import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})

export class PProfileComponent {
  defaultImage = 'assets/images/patient.jpg';
  previewUrl: string | ArrayBuffer | null = null;
  profile = {
    firstName: '',
    personalPhone: '',
    lastName: '',
    workPhone: '',
    username: '',
    location: '',
    email: '',
    organization: '',
    gender: '',
    region: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
constructor(private router: Router) {}


  ngOnInit(): void {
    const saved = localStorage.getItem('profileData');
    if (saved) {
      this.profile = JSON.parse(saved);
    }
  }

  saveProfile() {
    console.log('Saved Profile:', this.profile);
    localStorage.setItem('profileData', JSON.stringify(this.profile));
    alert('Profile saved locally!');
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  
  goToDashboard() {
    this.router.navigate(['/Patient/Home']);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}




  

 