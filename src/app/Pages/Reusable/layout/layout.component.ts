import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NgClass, RouterLink, RouterOutlet, UpperCasePipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  @Input() navLinks: string[] = [];
  @Input() showProfile: boolean = false;

  @Output() tabChange = new EventEmitter<string>();

  activeTab = 'home';

  setActive(link: string) {
    this.activeTab = link;
    this.tabChange.emit(link);
  }
}
