import { Component } from '@angular/core';

@Component({
  selector: 'app-l-faq',
  templateUrl: './l-faq.component.html',
  styleUrls: ['./l-faq.component.css']  // Corrected from `styleUrl`
})
export class LFAQComponent {
  faqs = [
    { 
      question: 'What is E-Health?', 
      answer: 'E-Health uses digital technology to enhance healthcare services, including telemedicine and health monitoring.', 
      open: false 
    },
    { 
      question: 'How do I book an online consultation?', 
      answer: 'Sign in, choose a doctor, and pick a time slot for your consultation.', 
      open: false 
    },
    { 
      question: 'Is my health data secure?', 
      answer: 'Yes, we use encrypted storage and comply with healthcare security standards.', 
      open: false 
    },
    { 
      question: 'Can I receive electronic prescriptions?', 
      answer: 'Yes, after a consultation, our doctors can issue e-prescriptions.', 
      open: false 
    },
    { 
      question: 'Which devices support online consultations?', 
      answer: 'You can use smartphones, tablets, or desktops with a stable internet connection.', 
      open: false 
    }
  ];

  toggleFAQ(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
