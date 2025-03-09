import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LayoutComponent } from '../../Reusable/layout/layout.component';

@Component({
  selector: 'app-d-layout',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './d-layout.component.html',
  styleUrl: './d-layout.component.css',
})
export class DLayoutComponent {
  Links: string[] = ['Home', 'Appointment','Blog','Contact us'];
  activeTab = 'home';
  setActive(link: string) {
    this.activeTab = link;
  }
}
