import { AfterViewInit, Component } from '@angular/core';
import { ChatComponent } from '../../Reusable/chat/chat.component';
import {
  ChatMessage,
  ContactMessage,
} from '../../Reusable/models/chat-message';

@Component({
  selector: 'app-d-chat',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './d-chat.component.html',
  styleUrls: ['./d-chat.component.css'],
})
export class DChatComponent implements AfterViewInit {
  peerName = '';
  peerImage = '';
  chatMessages: ChatMessage[] = [];

  contactsList: ContactMessage[] = [
    {
      id: 1,
      name: 'John Doe',
      image: 'assets/images/image.png',
      specialty: 'Patient',
      unread: 1,
      messages: [
        {
          sender: 'patient',
          text: 'I’m not feeling well.',
          time: '9:00 AM',
          type: 'text',
        },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'assets/images/image2.png',
      specialty: 'Patient',
      unread: 0,
      messages: [
        { sender: 'patient', text: 'Hi Doc!', time: '8:30 AM', type: 'text' },
      ],
    },
  ];
  ngAfterViewInit(): void {
    this.onContactSelected(this.contactsList[0]);
  }

  onContactSelected(contact: ContactMessage) {
    this.peerName = contact.name;
    this.peerImage = contact.image;
    this.chatMessages = [...contact.messages];
  }
}
