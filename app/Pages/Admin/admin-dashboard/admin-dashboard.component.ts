
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterOutlet],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  recentActivities = [
    {
      user: 'Dr. Smith',
      avatar: 'assets/doctor-1.jpg',
      action: 'Created new blog post',
      time: new Date(),
      status: 'completed'
    },
    {
      user: 'Patient John',
      avatar: 'assets/patient-1.jpg',
      action: 'Booked appointment',
      time: new Date(Date.now() - 3600000),
      status: 'pending'
    },
    // More activities...
  ];

  users = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah@ehealth.com',
      role: 'doctor',
      avatar: 'assets/doctor-2.jpg',
      active: true
    },
    {
      id: 2,
      name: 'Michael Brown',
      email: 'michael@ehealth.com',
      role: 'patient',
      avatar: 'assets/patient-2.jpg',
      active: true
    },
    // More users...
  ];
}