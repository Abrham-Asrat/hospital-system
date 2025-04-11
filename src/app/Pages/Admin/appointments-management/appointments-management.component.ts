import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-appointments-management',
  templateUrl: './appointments-management.component.html',
  styleUrls: ['./appointments-management.component.css'],
  imports: [CommonModule, FormsModule],
})
export class AppointmentsManagementComponent {
  searchTerm = '';
  appointments = [
    {
      id: 1,
      patient: 'John Doe',
      doctor: 'Dr. Smith',
      date: '2025-04-12',
      time: '10:30 AM',
      type: 'Online',
      status: 'Pending',
    },
    {
      id: 2,
      patient: 'Jane Doe',
      doctor: 'Dr. Brown',
      date: '2025-04-13',
      time: '02:00 PM',
      type: 'Physical',
      status: 'Approved',
    },
  ];

  filterAppointments() {
    if (!this.searchTerm.trim()) return this.appointments;
    return this.appointments.filter((a) =>
      a.patient.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      a.doctor.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  changeStatus(id: number, status: string) {
    const appt = this.appointments.find((a) => a.id === id);
    if (appt) appt.status = status;
  }
}
