import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../../Reusable/layout/layout.component';

@Component({
  selector: 'app-l-layout',
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './l-layout.component.html',
  styleUrl: './l-layout.component.css',
})
export class LLayoutComponent {Links: string[] = ['Home', 'Blog', 'About', 'Contact', 'FAQ'];
  activeTab = 'home';
  setActive(link: string) {
    this.activeTab = link;
  }
}
