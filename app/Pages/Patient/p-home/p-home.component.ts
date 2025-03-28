import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-home',
  imports: [NgFor],
  templateUrl: './p-home.component.html',
  styleUrl: './p-home.component.css',
})
export class PHomeComponent {
  patientName = 'John Doe'; // Replace with dynamic user data

  healthTips = [
    'Drink plenty of water to stay hydrated.',
    'Get at least 7-8 hours of sleep every night.',
    'Exercise regularly for at least 30 minutes a day.',
    'Eat a balanced diet rich in fruits and vegetables.',
    'Manage stress with meditation and deep breathing.',
  ];

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
