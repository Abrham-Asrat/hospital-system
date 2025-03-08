import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NgClass, RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  navLinks: string[] = ['Home', 'Blog', 'About', 'Contact', 'FAQ'];
  activeTab = 'home';
  profileActive: boolean = false;
  setActive(link: string) {
    this.activeTab = link;
  }
}
