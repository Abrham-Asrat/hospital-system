import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OTPComponent implements OnChanges {
  @Input() Logged: string = '';

  currentRole: string = 'Doctor';
  otpData: string[] = ['', '', '', ''];
  email: string = '';
  otpControls = ['d1', 'd2', 'd3', 'd4'];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private route: Router
  ) {}

  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow only numbers (0-9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //  debugger;
    if (changes['Logged'] && changes['Logged'].currentValue) {
      this.currentRole = changes['Logged'].currentValue;
      console.log('🔁 OTPComponent Logged updated to:', this.currentRole);
      this.cdr.detectChanges();
    }
  }

  onInput(event: any, index: number): void {
    const input = event.target;
    const value = input.value;

    if (value.length === 1 && index < this.otpControls.length - 1) {
      const nextInput = document.getElementById('otp' + (index + 1));
      if (nextInput) (nextInput as HTMLElement).focus();
    }

    this.otpData[index] = value;
  }

  onBackspace(event: any, index: number): void {
    if (!event.target.value && index > 0) {
      const prevInput = document.getElementById('otp' + (index - 1));
      if (prevInput) (prevInput as HTMLElement).focus();
    }

    this.otpData[index] = '';
  }

  onSubmit(): void {
    const otp = this.otpData.join('');
    console.log('🔐 Entered OTP:', otp);
    console.log('🌐 Navigating to:', this.currentRole);

    if (otp === '1234') {
      const otpModalEl = document.getElementById('OtpModal');
      const otpModal = bootstrap.Modal.getInstance(otpModalEl);
      otpModal?.hide();

      setTimeout(() => {
        const verifyModalEl = document.getElementById('verifyModal');
        const verifyModal = new bootstrap.Modal(verifyModalEl);
        verifyModal.show();
      }, 300);
    } else {
      alert('Invalid OTP!');
    }
  }

  navigatePage(): void {
    const modal = document.getElementById('verifyModal');
    if (modal) {
      modal.classList.remove('show');
      (modal as any).style.display = 'none';
    }

    document.body.classList.remove('modal-open');
    const backdrop = document.querySelector('.modal-backdrop');
    backdrop?.remove();

    setTimeout(() => {
      this.router.navigate([this.currentRole]);
    }, 300);
  }

  backToLogin(): void {
    const otpModalEl = document.getElementById('OtpModal');
    const otpModal = bootstrap.Modal.getInstance(otpModalEl);
    otpModal?.hide();

    setTimeout(() => {
      const loginModalEl = document.getElementById('LogInModal');
      const loginModal = new bootstrap.Modal(loginModalEl);
      loginModal.show();
    }, 300);
  }
}
