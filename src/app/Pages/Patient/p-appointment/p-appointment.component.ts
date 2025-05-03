import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-p-appointment',
  imports: [FormsModule, NgIf, NgFor, NgClass],
  templateUrl: './p-appointment.component.html',
  styleUrl: './p-appointment.component.css',
})
export class PAppointmentComponent {
  upcomingAppointments = [
    {
      id: 1,
      doctor: 'Workaba',
      date: '2024-03-20',
      time: '10:30 AM',
      status: 'Confirmed',
      reason: 'Ya man',
    },
    {
      id: 2,
      doctor: 'Abebe',
      date: '2024-03-22',
      time: '2:00 PM',
      status: 'Pending',
      reason: '',
    },
  ];

  pastAppointments = [
    {
      id: 3,
      doctor: 'Kebede',
      date: '2024-02-10',
      time: '1:00 PM',
      status: 'Completed',
      reason: '',
    },
    {
      id: 2,
      doctor: 'Alemu',
      date: '2024-02-10',
      time: '1:00 PM',
      status: 'Completed',
      reason: '',
    },
  ];

  doctors = ['Workaba', 'Abebe', 'Kebede', 'Meaza','Alemu'];
  newAppointment = { doctor: '', date: '', time: '', reason: '' };

  getStatusClass(status: string) {
    return {
      'text-success': status === 'Confirmed',
      'text-warning': status === 'Pending',
      'text-muted': status === 'Completed',
    };
  }

  cancelAppointment(id: number) {
    this.upcomingAppointments = this.upcomingAppointments.filter(
      (appoint) => appoint.id !== id
    );
  }

  bookAppointment() {
    if (
      this.newAppointment.doctor &&
      this.newAppointment.date &&
      this.newAppointment.time &&
      this.newAppointment.reason
    ) {
      this.upcomingAppointments.push({
        id: this.upcomingAppointments.length + 1,
        doctor: this.newAppointment.doctor,
        date: this.newAppointment.date,
        time: this.newAppointment.time,
        status: 'Pending',
        reason: this.newAppointment.reason,
      });

      alert('Appointment booked successfully!');
      this.newAppointment = { doctor: '', date: '', time: '',reason:'' };
    }
  }
}
