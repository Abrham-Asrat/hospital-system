import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
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
}
