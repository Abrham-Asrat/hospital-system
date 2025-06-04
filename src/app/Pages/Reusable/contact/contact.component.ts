import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';  // Required for *ngIf

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [FormsModule, NgIf],  // Add both FormsModule and NgIf
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  messageDelivered = false;

  onSubmit() {
    this.messageDelivered = true;
    console.log('Form submitted!');

    setTimeout(() => {
      this.messageDelivered = false;
    }, 2000);
    
  }
}
