import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-d-signup',
  imports: [],
  templateUrl: './d-signup.component.html',
  styleUrl: './d-signup.component.css',
})
export class DoctorSignupComponent {
  doctorForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    licenseNumber: new FormControl('', Validators.required),
    specialty: new FormControl('', Validators.required),
    
  });

  selectedFile: File | null = null; // Store file

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Doctor Sign-Up Data:', this.doctorForm.value);
    // TODO: Add API call to register doctor
    alert('Doctor Registered Successfully!');
    this.router.navigate(['/login']); // Redirect to login page after signup
  }
}
