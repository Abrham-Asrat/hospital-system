import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../Reusable/layout/layout.component';

@Component({
  selector: 'app-p-layout',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './p-layout.component.html',
  styleUrl: './p-layout.component.css',
})
export class PLayoutComponent {
  Links: string[] = ['Home', 'Appointment', 'Blog', 'Contact us'];
  activeTab = '';
  setActive(link: string) {
    this.activeTab = link;
  }
}
