import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;
  hasAccount: boolean = true;

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

  signUpUser() {
    this.hasAccount = true;
  }
}
