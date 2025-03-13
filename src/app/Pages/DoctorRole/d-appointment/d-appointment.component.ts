import { Component } from '@angular/core';

@Component({
  selector: 'app-d-appointment',
  imports: [],
  templateUrl: './d-appointment.component.html',
  styleUrl: './d-appointment.component.css'
})
export class DAppointmentComponent {
   appointmentAccepted(){alert("Appointment accepted")}
   appointmentRejected(){alert("Appointment Rejected")}
}
