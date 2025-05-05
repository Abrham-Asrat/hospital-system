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
  private timerInterval: any;
  recordingTime = '00:00';
  private startTime: number | null = null;
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

  startRecording(): void {
    if (this.isRecording) return;

    this.recordingTime = '00:00';
    this.startTime = Date.now();

    this.timerInterval = setInterval(() => {
      if (this.isRecording && this.startTime) {
        const elapsed = Math.floor((Date.now() - this.startTime!) / 1000);
        const minutes = Math.floor(elapsed / 60)
          .toString()
          .padStart(2, '0');
        const seconds = (elapsed % 60).toString().padStart(2, '0');
        this.recordingTime = `${minutes}:${seconds}`;
      }
    }, 1000);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.isRecording = true;
        this.audioChunks = [];
        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            this.audioChunks.push(e.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          const blob = new Blob(this.audioChunks, { type: 'audio/webm' });
          if (blob.size === 0) {
            console.warn('Empty audio blob. Recording may have failed.');
            return;
          }

          const url = URL.createObjectURL(blob);
          const currentTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          const message: ChatMessage = {
            sender: this.userRole,
            fileUrl: url,
            time: currentTime,
            type: 'audio',
          };

          this.messages.push(message);
          this.audioSent.emit(message);
          this.scrollToBottom();

          stream.getTracks().forEach((track) => track.stop());
          this.mediaRecorder = null;
        };
        this.mediaRecorder.start(100); // Use timeSlice to ensure ondataavailable fires
      })
      .catch((err) => {
        console.error('Microphone access denied', err);
        alert('Could not access microphone. Please allow permissions.');
        this.isRecording = false;
      });
  }

  // Stop Audio Recording
  stopRecording(): void {
    if (!this.mediaRecorder || !this.isRecording) return;

    this.isRecording = false;

    try {
      this.mediaRecorder.requestData(); // Ensure last chunk is captured
      this.mediaRecorder.stop(); // This triggers onstop
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
