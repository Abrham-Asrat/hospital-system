import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-contact',
  imports: [FormsModule],
  templateUrl: './d-contact.component.html',
  styleUrl: './d-contact.component.css',
})
export class DContactComponent {
  contactForm = { name: '', email: '', message: '' };

  sendMessage() {
    if (
      this.contactForm.name &&
      this.contactForm.email &&
      this.contactForm.message
    ) {
      alert(`Thank you, ${this.contactForm.name}! Your message has been sent.`);
      this.contactForm = { name: '', email: '', message: '' };
    }
  }
}
