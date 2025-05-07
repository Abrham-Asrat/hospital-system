import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-d-appointment',
  imports: [NgFor],
  templateUrl: './d-appointment.component.html',
  styleUrl: './d-appointment.component.css',
})
export class DAppointmentComponent {
  activeTab: string = 'upcoming';

  upcomingAppointments = [
    {
      name: 'John Doe',
      time: '10:30 AM',
      date: 'March 10, 2024',
      reason: 'General Checkup',
    },
    {
      name: 'John Doe',
      time: '10:30 AM',
      date: 'March 10, 2024',
      reason: 'General Checkup',
    },
    {
      name: 'Jane Smith',
      time: '2:00 PM',
      date: 'March 12, 2024',
      reason: 'Follow-up Consultation',
    },
  ];

  pastAppointments = [
    {
      name: 'Mark Wilson',
      date: 'Feb 20, 2024',
      status: 'Completed',
    },
    {
      name: 'Susan Brown',
      date: 'Feb 18, 2024',
      status: 'Completed',
    },
  ];

  appointmentAccepted(appointment: any) {
    this.moveToPast(appointment, 'Confirmed');
  }

  appointmentRejected(appointment: any) {
    this.moveToPast(appointment, 'Cancelled');
  }

  private moveToPast(appointment: any, status: string): void {
    // Remove from upcomingAppointments
    this.upcomingAppointments = this.upcomingAppointments.filter(
      (a) => a !== appointment
    );

    this.pastAppointments.push({
      name: appointment.name,
      date: appointment.date,
      status: status,
    });
  }
}
