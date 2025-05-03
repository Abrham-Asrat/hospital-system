import { Component } from '@angular/core';
import { ChatComponent } from '../../Reusable/chat/chat.component';
import {
  ChatMessage,
  ContactMessage,
} from '../../Reusable/models/chat-message';

@Component({
  selector: 'app-p-chat',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './p-chat.component.html',
  styleUrls: ['./p-chat.component.css'],
})
export class PChatComponent {
  peerName = '';
  peerImage = '';
  chatMessages: ChatMessage[] = [];

  contactsList: ContactMessage[] = [
    {
      id: 1,
      name: 'Dr. Bini',
      image: 'assets/images/doctor1.png',
      specialty: 'Lab',
      unread: 2,
      messages: [
        { sender: 'doctor', text: 'Hello!', time: '10:00 AM', type: 'text' },
        {
          sender: 'patient',
          text: 'Hi Doctor.',
          time: '10:02 AM',
          type: 'text',
        },
      ],
    },
    {
      id: 2,
      name: 'Dr. John',
      image: 'assets/images/doctor2.png',
      specialty: 'Cardiology',
      unread: 1,
      messages: [
        {
          sender: 'doctor',
          text: 'How are you?',
          time: '9:30 AM',
          type: 'text',
        },
      ],
    },
  ];

  onContactSelected(contact: ContactMessage) {
    this.peerName = contact.name;
    this.peerImage = contact.image;
    this.chatMessages = [...contact.messages];
  }
}
