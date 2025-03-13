import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LayoutComponent } from '../../Reusable/layout/layout.component';
import { FooterComponent } from "../../Reusable/footer/footer.component";

@Component({
  selector: 'app-d-layout',
  imports: [LayoutComponent, FooterComponent],
  templateUrl: './d-layout.component.html',
  styleUrl: './d-layout.component.css',
})
export class DLayoutComponent {
  Links: string[] = ['DHome', 'DAppointment', 'DBlog', 'DContact'];
  Chat: string = 'DChat';
  Notification: string = 'DNotification';
  profile: string = 'DProfile';
  activeTab = 'DHome';
  setActive(link: string) {
    this.activeTab = link;
  }
}
