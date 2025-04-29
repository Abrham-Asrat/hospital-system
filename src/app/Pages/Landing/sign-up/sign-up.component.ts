import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  isDoctor!: boolean;
  SignToggler!: string;
  signUpToggler!: string;
  otpVisible: boolean = false;

  ngOnInit(): void {
    this.isDoctor = false;
    this.SignToggler = 'Patient';
    this.signUpToggler = 'Doctor';
  }

  signUpData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  };

  selectedCVFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedCVFile = file;
    }
  }

  onSignUp(): void {
    if (this.signUpData.password !== this.signUpData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('firstName', this.signUpData.firstName);
    formData.append('lastName', this.signUpData.lastName);
    formData.append('email', this.signUpData.email);
    formData.append('password', this.signUpData.password);
    if (this.selectedCVFile) {
      formData.append('cv', this.selectedCVFile);
    }
    // send to backend
    this.http.post('https://your-api-url.com/api/signup', formData).subscribe({
      next: (response) => {
        console.log('✅ Signup success:', response);
        alert('Registration successful!');
      },
      error: (error) => {
        console.error('❌ Signup failed:', error);
        alert('Registration failed. Please try again.');
      },
    });
  }
  signUpChanger(toggler: boolean): void {
    this.isDoctor = toggler;
    this.SignToggler = this.isDoctor ? 'Doctor' : 'Patient';
    this.signUpToggler = this.isDoctor ? 'Patient' : 'Doctor';
  }
}