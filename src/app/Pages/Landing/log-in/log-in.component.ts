import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log('Login Successful', this.loginForm.value);
      // You can redirect the user or call an API here
    } else {
      console.log('Invalid form');
    }
  }
}
