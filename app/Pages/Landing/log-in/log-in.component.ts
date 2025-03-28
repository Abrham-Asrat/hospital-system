import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  isSignupFormVisible: boolean = false; // Controls visibility of Signup form

  constructor(private fb: FormBuilder) {
    // Initialize login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Initialize signup form
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Getters for the form controls
  get loginFormControls() {
    return this.loginForm.controls;
  }

  get signUpFormControls() {
    return this.signUpForm.controls;
  }

  // On Login submit
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Successful:', this.loginForm.value);
    } else {
      console.log('Invalid Login Form');
    }
  }

  // On SignUp submit
  onSignUp() {
    if (this.signUpForm.valid) {
      console.log('Sign Up Successful:', this.signUpForm.value);
    } else {
      console.log('Invalid Sign Up Form');
    }
  }

  // Toggle between Login and SignUp form
  toggleForm() {
    this.isSignupFormVisible = !this.isSignupFormVisible;
  }
}
