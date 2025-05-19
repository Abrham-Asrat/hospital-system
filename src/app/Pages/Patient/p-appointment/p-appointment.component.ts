import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | string;
  reason: 'In-Person' | 'Online' | string;
}

@Component({
  selector: 'app-p-appointment',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgClass],
  templateUrl: './p-appointment.component.html',
  styleUrl: './p-appointment.component.css',
})
export class PAppointmentComponent {
  @ViewChild('appointmentForm') appointmentForm!: NgForm;

  upcomingAppointments: Appointment[] = [
    {
      id: 1,
      doctor: 'Workaba',
      date: '2024-03-20',
      time: '10:30 AM',
      status: 'Confirmed',
      reason: 'In-Person',
    },
    {
      id: 2,
      doctor: 'Abebe',
      date: '2024-03-22',
      time: '2:00 PM',
      status: 'Pending',
      reason: 'Online',
    },
  ];

  pastAppointments: Appointment[] = [
    {
      id: 3,
      doctor: 'Kebede',
      date: '2024-02-10',
      time: '1:00 PM',
      status: 'Completed',
      reason: 'In-Person',
    },
    {
      id: 4,
      doctor: 'Alemu',
      date: '2024-02-10',
      time: '1:00 PM',
      status: 'Completed',
      reason: 'Online',
    },
  ];

  doctors = ['Workaba', 'Abebe', 'Kebede', 'Meaza', 'Alemu'];
  newAppointment: Omit<Appointment, 'id' | 'status'> = { doctor: '', date: '', time: '', reason: '' };
  searchQuery: any; // If you use this for a separate search input
  editingAppointmentId: number | null = null;

  onInputFocus() {
    console.log('Doctor input focused.');
  }

  onSearch() {
    const searchTerm = this.newAppointment.doctor.trim(); // Assuming search uses this field
    if (!searchTerm) {
      alert('Please enter a doctor\'s name to search.');
      return;
    }
    // Implement your actual search logic here.
    // This might involve filtering 'this.doctors' or making an API call.
    // For now, just an alert.
    alert(`Searching for doctor: ${searchTerm}`);
    const foundDoctor = this.doctors.find(doc => doc.toLowerCase().includes(searchTerm.toLowerCase()));
    if (foundDoctor) {
        console.log("Doctor found in list:", foundDoctor);
        // You might automatically select it or show results
    } else {
        console.log("Doctor not in predefined list, continue typing or add new.");
    }
  }

  getStatusClass(statusOrReason: string) {
    // Combined logic for status and reason if needed, or separate methods
    return {
      'text-success': statusOrReason === 'Confirmed',
      'text-warning': statusOrReason === 'Pending',
      'text-info': statusOrReason === 'Online',
      'text-primary': statusOrReason === 'In-Person',
      'text-muted': statusOrReason === 'Completed',
    };
  }

  startEditAppointment(appointmentToEdit: Appointment) {
    console.log('Starting edit for:', appointmentToEdit);
    this.editingAppointmentId = appointmentToEdit.id;
    // Populate the form with the appointment's current details
    // Make sure to create a new object to avoid direct mutation if the user cancels edit
    this.newAppointment = {
      doctor: appointmentToEdit.doctor,
      date: appointmentToEdit.date,
      time: appointmentToEdit.time,
      reason: appointmentToEdit.reason,
    };
    // Scroll to form if desired
    // document.querySelector('.book-appointment')?.scrollIntoView({ behavior: 'smooth' });
  }

  cancelEdit() {
    this.editingAppointmentId = null;
    this.resetFormFields();
  }

  resetFormFields() {
    // Reset the model bound to the form
    this.newAppointment = { doctor: '', date: '', time: '', reason: '' };
    // If the form is available, reset its state (validation, pristine, etc.)
    if (this.appointmentForm) {
      this.appointmentForm.resetForm({ // Pass the initial state if you want to reset to specific default values
        doctor: '',
        date: '',
        time: '',
        reason: ''
      });
    }
  }

  cancelAppointment(id: number) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      this.upcomingAppointments = this.upcomingAppointments.filter(
        (appoint) => appoint.id !== id
      );
      if (this.editingAppointmentId === id) {
        this.cancelEdit(); // If editing the cancelled appointment, reset form
      }
      alert('Appointment cancelled.');
    }
  }

  bookAppointment() {
    // Basic validation, ngModel should handle 'required' on inputs
    if (!this.newAppointment.doctor || !this.newAppointment.date || !this.newAppointment.time || !this.newAppointment.reason) {
        alert('Please fill in all required fields.');
        return;
    }

    if (this.editingAppointmentId !== null) {
      // --- UPDATE EXISTING APPOINTMENT ---
      const appointmentIndex = this.upcomingAppointments.findIndex(
        (appt) => appt.id === this.editingAppointmentId
      );

      if (appointmentIndex > -1) {
        // Get the original appointment to preserve status or other non-editable fields
        const originalAppointment = this.upcomingAppointments[appointmentIndex];

        this.upcomingAppointments[appointmentIndex] = {
          ...originalAppointment, // Spread original to keep ID, status, etc.
          doctor: this.newAppointment.doctor,
          date: this.newAppointment.date,
          time: this.newAppointment.time,
          reason: this.newAppointment.reason,
          // status remains 'Pending' as we are editing a pending appointment
        };
        alert('Appointment updated successfully!');
      } else {
        alert('Error: Could not find the appointment to update. It might have been cancelled.');
      }
      // Reset editing mode after successful update or if not found
      this.cancelEdit(); // This will reset editingAppointmentId and form fields
    } else {
      // --- CREATE NEW APPOINTMENT ---
      const newId = this.upcomingAppointments.length > 0 || this.pastAppointments.length > 0
            ? Math.max(0, ...this.upcomingAppointments.map(a => a.id), ...this.pastAppointments.map(a => a.id)) + 1
            : 1;

      this.upcomingAppointments.push({
        id: newId,
        doctor: this.newAppointment.doctor,
        date: this.newAppointment.date,
        time: this.newAppointment.time,
        status: 'Pending', // New appointments are always 'Pending'
        reason: this.newAppointment.reason,
      });
      alert('Appointment booked successfully!');
      this.resetFormFields(); // Reset form for the next new booking
    }
  }
}