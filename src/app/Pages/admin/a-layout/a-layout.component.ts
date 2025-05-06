import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../../hospital-system-main/src/app/Pages/Reusable/layout/layout.component';
import { FooterComponent } from '../../../../../../hospital-system-main/src/app/Pages/Reusable/footer/footer.component';
import { NgClass } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-a-layout',
  standalone: true,
  imports: [LayoutComponent, FooterComponent],
  templateUrl: './a-layout.component.html',
  styleUrls: ['./a-layout.component.css'],
})
export class ALayoutComponent {
  Links: string[] = ['Home', 'Appointment', 'User', 'Payment', 'Blog', 'Setting'];
  Chat: string = 'AChat';
  Notification: string = 'ANotification';
  profile: string = 'AProfile';

  activeTab = 'AHome';

  setActive(link: string) {
    this.activeTab = link;
  }
}
