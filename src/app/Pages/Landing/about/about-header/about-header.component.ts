import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutDoctorComponent } from "../about-doctor/about-doctor.component";

@Component({
  selector: 'app-about-header',
  imports: [AboutDoctorComponent],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.css',
})
export class AboutHeaderComponent {
  @ViewChild(AboutDoctorComponent) aboutDoctorComponent!: AboutDoctorComponent;

  scrollToSection(): void {
    // Access the message property from the child component
    const sectionId = this.aboutDoctorComponent.message;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${sectionId}" not found.`);
    }
  }
}
