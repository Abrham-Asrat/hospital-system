import { Component } from '@angular/core';
import { LayoutComponent } from '../../Reusable/layout/layout.component';
import { FooterComponent } from "../../Reusable/footer/footer.component";

@Component({
  selector: 'app-p-layout',
  imports: [LayoutComponent, FooterComponent],
  templateUrl: './p-layout.component.html',
  styleUrl: './p-layout.component.css',
})
export class PLayoutComponent {
  Links: string[] = ['PHome', 'PAppointment', 'PBlog', 'PContact'];
  Chat: string = 'PChat';
  Notification: string = 'PNotification';
  profile: string = 'PProfile';
  activeTab = 'PHome';
  setActive(link: string) {
    this.activeTab = link;
  }
}
