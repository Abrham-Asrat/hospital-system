import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  quickStats = [
    { title: 'Appointments', value: 120, bg: 'bg-primary', icon: 'bi bi-calendar-check' },
    { title: 'Doctors', value: 24, bg: 'bg-success', icon: 'bi bi-person-badge' },
    { title: 'Patients', value: 450, bg: 'bg-info', icon: 'bi bi-people' },
    { title: 'Earnings', value: '$12,300', bg: 'bg-warning', icon: 'bi bi-currency-dollar' }
  ];

  appointmentChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Appointments',
        data: [50, 65, 80, 70, 95, 110],
        borderColor: '#0d6efd',
        tension: 0.3,
        fill: false
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  recentActivities = [
    'Dr. Smith approved a new appointment',
    'Patient John submitted a review',
    'System backup completed',
    'Dr. Lisa updated her schedule'
  ];

  recentAppointments = [
    { patient: 'John Doe', doctor: 'Dr. Smith', date: '2025-04-10', status: 'Confirmed' },
    { patient: 'Jane Roe', doctor: 'Dr. Lisa', date: '2025-04-09', status: 'Completed' },
    { patient: 'Alice Blue', doctor: 'Dr. Mark', date: '2025-04-08', status: 'Pending' },
    { patient: 'Bob Green', doctor: 'Dr. Emma', date: '2025-04-07', status: 'Cancelled' }
  ];
}
