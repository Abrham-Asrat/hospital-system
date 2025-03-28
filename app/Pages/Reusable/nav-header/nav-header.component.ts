import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  imports: [NgClass, RouterLink, RouterOutlet],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
})
export class NavHeaderComponent {
  navLinks: string[] = ['Home', 'Blog', 'About', 'Contact', 'FAQ'];
  activeTab = 'home';
  profileActive: boolean = true;
  setActive(link: string) {
    this.activeTab = link;
  }
}
