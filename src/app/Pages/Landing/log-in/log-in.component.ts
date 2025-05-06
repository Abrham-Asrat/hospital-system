import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OTPComponent } from '../otp/otp.component';

declare var bootstrap: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, OTPComponent],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LoginComponent {
  isPatient: boolean = false;
  toggle: string = 'Patient';
  loginOTP!: string;
  loginToggler: string = 'Doctor';
  hider: boolean = true;

  loginData = {
    email: '',
    password: '',
  };

  /**
   * Toggle role between Patient and Doctor.
   */
  signUpChanger(toggler: boolean): void {
    this.isPatient = toggler;
    this.loginToggler = this.isPatient ? 'Patient' : 'Doctor';
    this.toggle = this.isPatient ? 'Doctor' : 'Patient';

    console.log('🌀 Role switched to:', this.toggle);
  }

  /**
   * Toggle password visibility.
   */
  hide(): void {
    this.hider = !this.hider;
  }

  /**
   * Submit login form.
   */
  onSubmit(): void {
    this.loginOTP = this.toggle;
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please enter both email and password.');
      return;
    }

    if (
      this.loginData.email === 'ab@gmail.com' &&
      this.loginData.password === '123'
    ) {
      const loginModalEl = document.getElementById('LogInModal');
      const loginModal = bootstrap.Modal.getInstance(loginModalEl);
      loginModal?.hide();

      setTimeout(() => {
        const otpModalEl = document.getElementById('OtpModal');
        const otpModal = new bootstrap.Modal(otpModalEl);
        otpModal.show();        
      }, 300);
    } else {
      alert('Invalid email or password.');
    }
  }
}
