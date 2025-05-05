export type MessageType = 'text' | 'image' | 'audio';
export interface ChatMessage {
  sender: 'doctor' | 'patient';
  text?: string;
  fileUrl?: string;
  time: string;
  type: MessageType;
  duration?: string; // For audio messages
}

export interface ContactMessage {
  id: number | string;
  name: string;
  image: string;
  specialty?: string;
  unread: number;
  messages: ChatMessage[];
}
