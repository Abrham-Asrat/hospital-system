import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OTPComponent } from "../otp/otp.component";

@Component({
  selector: 'app-login',
  imports: [OTPComponent],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LoginComponent {
  // Function to handle the sign-up button click
  signUp: String = '';
  isDoctor: boolean = false;
  toggler: string = 'Patient';
  signToggler: string = 'Doctor';

  signUpChanger(toggler: boolean) {
    this.isDoctor = toggler;
    this.toggler = this.isDoctor ? 'Doctor' : 'Patient';
    this.signToggler = this.isDoctor ? 'Patient' : 'Doctor';
  }
  // password
  hider: boolean = false;
  hide() {
    this.hider = !this.hider;
  }
}
