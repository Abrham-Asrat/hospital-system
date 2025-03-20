import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [NgClass,NgFor],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  notifications = [
    {
      id: 1,
      title: 'New Appointment',
      message: 'John Doe booked an appointment for March 15.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      title: 'System Update',
      message: 'New features have been added to the dashboard.',
      time: '1 day ago',
      read: true,
    },
    {
      id: 3,
      title: 'Appointment Reminder',
      message: 'You have an appointment with Jane Smith tomorrow at 3 PM.',
      time: '5 hours ago',
      read: false,
    },
  ];

  markAsRead(notification: any) {
    notification.read = false;
  }
  remove(id: any) {
    console.log(id);
    this.notifications = this.notifications.filter((notify) => {
      return notify.id !== id;
    });
  }
}
