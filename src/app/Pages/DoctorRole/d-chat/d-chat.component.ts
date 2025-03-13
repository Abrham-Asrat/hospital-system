import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-chat',
  imports: [NgClass, NgFor, FormsModule, NgIf],
  templateUrl: './d-chat.component.html',
  styleUrl: './d-chat.component.css',
})
export class DChatComponent {
  messages: {
    sender: string;
    text?: string;
    fileUrl?: string;
    time: string;
    type: string;
  }[] = [
    {
      sender: 'patient',
      text: 'Hello Doctor, I have a question.',
      time: '10:00 AM',
      type: 'text',
    },
    {
      sender: 'doctor',
      text: "Sure, I'm here to help!",
      time: '10:02 AM',
      type: 'text',
    },
  ];

  newMessage = '';
  isRecording = false;
  mediaRecorder: any; // ✅ Declare as `any` to avoid TypeScript errors
  audioChunks: BlobPart[] = []; // ✅ Define properly as an array of BlobParts

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      this.messages.push({
        sender: 'doctor',
        text: this.newMessage,
        time: currentTime,
        type: 'text',
      });
      this.newMessage = '';
    }
  }

  sendFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      this.messages.push({
        sender: 'doctor',
        fileUrl: fileUrl,
        time: currentTime,
        type: 'file',
      });
    }
  }

  startRecording() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error('Browser does not support audio recording.');
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        this.isRecording = true;
        this.audioChunks = []; // ✅ Clear old recordings before starting new one
        this.mediaRecorder = new MediaRecorder(stream);

        this.mediaRecorder.ondataavailable = (event: BlobEvent) => {
          // ✅ Type explicitly as BlobEvent
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };

        this.mediaRecorder.start();
      })
      .catch((err) => console.error('Microphone access denied', err));
  }

  stopRecording() {
    if (!this.mediaRecorder) return;

    this.mediaRecorder.stop();
    this.mediaRecorder.onstop = () => {
      const audioBlob = new Blob(this.audioChunks, { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      this.messages.push({
        sender: 'doctor',
        fileUrl: audioUrl,
        time: currentTime,
        type: 'audio',
      });
      this.isRecording = false;
    };
  }
}