import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-doctor',
  imports: [],
  templateUrl: './about-doctor.component.html',
  styleUrl: './about-doctor.component.css',
})
export class AboutDoctorComponent {
  @Input() message: string = '';
}
