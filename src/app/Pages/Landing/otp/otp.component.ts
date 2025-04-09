import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-otp',
  imports: [ReactiveFormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
})
export class OTPComponent {
  otpControls = ['d1', 'd2', 'd3', 'd4'];

  otpForm = new FormGroup({
    d1: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    d2: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    d3: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
  });

  onInput(event: any, index: number) {
    const input = event.target;
    const value = input.value;

    if (value.length === 1 && index < this.otpControls.length - 1) {
      const nextInput = document.getElementById('otp' + (index + 1));
      if (nextInput) (nextInput as HTMLElement).focus();
    }
  }

  onBackspace(event: any, index: number) {
    const input = event.target;
    if (!input.value && index > 0) {
      const prevInput = document.getElementById('otp' + (index - 1));
      if (prevInput) (prevInput as HTMLElement).focus();
    }
  }

  onSubmit() {
    const otp = this.otpControls
      .map((c) => this.otpForm.get(c)?.value)
      .join('');
    console.log('Entered OTP:', otp);
    // Handle OTP verification here
  }
}
