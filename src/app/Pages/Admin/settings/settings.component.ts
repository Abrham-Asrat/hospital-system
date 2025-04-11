import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-admin-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SettingsComponent {
  admin = {
    name: 'Admin User',
    email: 'admin@ehealth.com',
  };

  password = {
    current: '',
    new: '',
    confirm: '',
  };

  platformSettings = {
    siteTitle: 'eHealth Platform',
    maintenanceMode: false,
  };

  notificationsSettings = {
    chatNotifications: true,
    commentNotifications: true,
    appointmentReminders: true,
    paymentNotifications: true,
  };

  updateAdminInfo() {
    alert('Admin info updated!');
  }

  updatePassword() {
    if (this.password.new !== this.password.confirm) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password updated successfully!');
    this.password = { current: '', new: '', confirm: '' };
  }

  updatePlatformSettings() {
    alert('Platform settings saved!');
  }

  updateNotifications() {
    alert('Notification settings updated!');
  }
}
