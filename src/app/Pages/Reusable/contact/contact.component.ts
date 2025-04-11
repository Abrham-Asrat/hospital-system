import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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

