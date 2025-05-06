import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Payment {
  id: number;
  paymentDate: string;
  doctor: string;
  patient: string;
  amount: number;
  status: 'Pending' | 'Paid' | 'Rejected';
}
@Component({
  selector: 'app-a-payment',
  imports: [CommonModule],
  templateUrl: './a-payment.component.html',
  styleUrl: './a-payment.component.css'
})
export class APaymentComponent implements OnInit {

  payments: Payment[] = [
    {
      id: 1,
      paymentDate: '2025-04-10',
      doctor: 'Dr. John Doe',
      patient: 'Jane Smith',
      amount: 50,
      status: 'Pending',
    },
    {
      id: 2,
      paymentDate: '2025-04-09',
      doctor: 'Dr. Emily Clark',
      patient: 'Michael Brown',
      amount: 75,
      status: 'Paid',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  approvePayment(payment: Payment): void {
    if (payment.status !== 'Pending') return;
    payment.status = 'Paid';
    this.showMessage(`${payment.patient}'s payment has been approved.`);
  }

  rejectPayment(payment: Payment): void {
    if (payment.status !== 'Pending') return;
    payment.status = 'Rejected';
    this.showMessage(`${payment.patient}'s payment has been rejected.`);
  }

  viewPaymentHistory(payment: Payment): void {
    this.showMessage(`Showing payment history for ${payment.patient}.`);
    // Placeholder for actual history logic
  }

  private showMessage(message: string): void {
    // Later: Replace with modal/toast/snackbar for better UX
    alert(message);
  }
}
