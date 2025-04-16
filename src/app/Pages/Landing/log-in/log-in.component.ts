import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OTPComponent } from '../otp/otp.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [OTPComponent, ReactiveFormsModule], // Ensure ReactiveFormsModule is imported
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LoginComponent implements AfterViewInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    // Initialize the FormGroup in the constructor
    this.loginForm = this.fb.group({
      EmailId: [''], // Initialize email control
      Password: [''], // Initialize password control
    });
    {

}
  }
  ngAfterViewInit() {
    console.log('Form initialized:', this.loginForm);
  }

  onLogin() {
  
   debugger;
    // Check if the form is valid before proceeding
    const loginData = this.loginForm.value;
    this.http
      .post('https://projectapi.gerasim.in/api/UserApp/login', loginData)
      .subscribe({
        next: (res: any) => {
          if (res.status === 'success') {
            localStorage.setItem('userLogin', res.data.userId);
            this.router.navigateByUrl('Doctor');
          }
        },
        error: (err) => {
          alert('Login failed: ' + err.message);
        },
      });
  }

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

  // Password visibility toggle
  hider: boolean = true;
  hide() {
    this.hider = !this.hider;
  }
}
