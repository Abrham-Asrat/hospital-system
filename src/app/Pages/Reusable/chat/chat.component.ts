import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';
import { ChatMessage, ContactMessage } from '../models/chat-message';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-chat',
  imports: [FormsModule, NgClass, NgStyle, NgIf, NgFor],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements AfterViewChecked {
  // User Info
  @Input() userRole: 'doctor' | 'patient' = 'patient';
  @Input() userName: string = '';
  @Input() userImage: string = '';

  // Peer Info
  @Input() peerName: string = '';
  @Input() peerImage: string = '';

  // Contacts & Messages
  @Input() contacts: ContactMessage[] = [];
  @Input() messages: ChatMessage[] = [];

  // Outputs
  @Output() messageSent = new EventEmitter<ChatMessage>();
  @Output() audioSent = new EventEmitter<ChatMessage>();
  @Output() imageSent = new EventEmitter<ChatMessage>();
  @Output() contactSelected = new EventEmitter<ContactMessage>();

  // Local state
  newMessage = '';
  isRecording = false;
  mediaRecorder: MediaRecorder | null = null;
  audioChunks: BlobPart[] = [];

  // Send Text Message
  sendMessage(): void {
    if (this.newMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      const message: ChatMessage = {
        sender: this.userRole,
        text: this.newMessage,
        time: currentTime,
        type: 'text',
      };

      this.messages.push(message);
      this.messageSent.emit(message);
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  // Send Image
  sendImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const fileUrl = URL.createObjectURL(file);
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      const message: ChatMessage = {
        sender: this.userRole,
        fileUrl,
        time: currentTime,
        type: 'image',
      };

      this.messages.push(message);
      this.imageSent.emit(message);
      this.scrollToBottom();
    }
  }

  // In chat.component.ts

  startRecording(): void {
    if (this.isRecording) return;

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.isRecording = true;
        this.audioChunks = []; // Reset chunks
        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data); // Collect audio chunks
          }
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: 'audio/mpeg' });
          const audioUrl = URL.createObjectURL(audioBlob);
          const currentTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          const message: ChatMessage = {
            sender: this.userRole,
            fileUrl: audioUrl,
            time: currentTime,
            type: 'audio',
          };

          this.messages.push(message);
          this.audioSent.emit(message);
          this.scrollToBottom();

          // Clean up
          stream.getTracks().forEach((track) => track.stop());
          this.mediaRecorder = null;
        };

        this.mediaRecorder.start();
      })
      .catch((err) => {
        console.error('Microphone access denied', err);
        alert('Could not access microphone.');
        this.isRecording = false;
      });
  }

  stopRecording(): void {
    console.log('Stopping recording...');
    if (!this.mediaRecorder || !this.isRecording) {
      console.warn('No active recording');
      return;
    }

    this.isRecording = false;

    try {
      console.log('Requesting data...');
      this.mediaRecorder.requestData(); // Forces ondataavailable
      console.log('Calling stop()...');
      this.mediaRecorder.stop();
    } catch (error) {
      console.error('Error stopping:', error);
    }
  }
  selectContact(contact: ContactMessage): void {
    this.contactSelected.emit(contact);
  }
  // Scroll to bottom of chat box
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      const container = document.querySelector('.chat-box');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    } catch (err) {
      console.error('Scroll failed:', err);
    }
  }

  // Open Review Modal (only for patient)
  openReviewModal(): void {
    const modalElement = document.getElementById('reviewModal');
    if (modalElement && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
