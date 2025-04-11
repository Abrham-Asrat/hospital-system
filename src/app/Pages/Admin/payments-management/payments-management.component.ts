import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-management',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule to enable ngFor and other directives
  templateUrl: './payments-management.component.html',
  styleUrls: ['./payments-management.component.css'],
})
export class PaymentsManagementComponent implements OnInit {

  payments = [
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
    // Add more payments as needed
  ];

  constructor() {}

  ngOnInit(): void {}

  // Admin approves the payment
  approvePayment(payment: any): void {
    payment.status = 'Paid';
    alert(`Payment for ${payment.patient} approved`);
  }

  // Admin rejects the payment
  rejectPayment(payment: any): void {
    payment.status = 'Rejected';
    alert(`Payment for ${payment.patient} rejected`);
  }

  // Function to handle payment history (you can add more logic here for fetching payment history)
  viewPaymentHistory(payment: any): void {
    alert(`Viewing payment history for ${payment.patient}`);
    // Logic to fetch and display payment history
  }
}
