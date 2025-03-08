import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-l-layout',
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './l-layout.component.html',
  styleUrl: './l-layout.component.css',
})
export class LLayoutComponent {
  navLinks : string [] = ['Home','Blog','About','Contact','FAQ'];
  activeTab = 'home';
  setActive(link: string) {
    this.activeTab = link;
  }
}
