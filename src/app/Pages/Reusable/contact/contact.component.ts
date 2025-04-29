import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Keep this import
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule], 
})

export class ContactComponent {
  messageDelivered = false;

  onSubmit() {
    this.messageDelivered = true;


    setTimeout(() => {
      this.messageDelivered = false;
    }, 2000);
  }
}
