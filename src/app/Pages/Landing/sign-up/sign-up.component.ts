import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OTPComponent } from '../otp/otp.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  // imports: [OTPComponent,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  isDoctor!: boolean;
  SignToggler!: string;
  signUpToggler!: string;
  otpVisible: boolean = false;
  constructor() {}
  ngOnInit(): void {
    this.isDoctor = false;
    this.SignToggler = 'Patient';
    this.signUpToggler = 'Doctor';
  }
  signUpChanger(toggler: boolean): void {
    this.isDoctor = toggler;
    this.SignToggler = this.isDoctor ? 'Doctor' : 'Patient';
    this.signUpToggler = this.isDoctor ? 'Patient' : 'Doctor';
  }
}
