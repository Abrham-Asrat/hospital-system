import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'], // Corrected property name
})
export class ContactComponent {
  contactForm = { name: '', email: '', message: '' };
  successMessage: string | null = null; // Add a property to manage the success message

  sendMessage() {
    
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      // Display the success message
      this.successMessage = `Thank you, ${this.contactForm.name}! Your message has been sent.`;

      // Reset the form fields
      this.contactForm = { name: '', email: '', message: '' };

      // Automatically hide the success message after 3 seconds
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    } else {
      // Optionally, show an error message if fields are incomplete
      alert('Please fill out all fields before submitting.');
    }
  }
}