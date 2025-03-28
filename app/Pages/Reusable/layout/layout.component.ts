import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [NgClass, RouterLink, RouterOutlet, UpperCasePipe, NgStyle],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  @Input() navLinks: string[] = [];
  @Input() message: string = '';
  @Input() Notification: string = '';
  @Input() profile: string = '';
  @Input() showProfile: boolean = false;

  @Output() tabChange = new EventEmitter<string>();
  activeTab = 'Home';

  setActive(link: string) {
    this.activeTab = link;
    this.tabChange.emit(link);
  }

  isScrolled = false; // Default state

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled 10% of the page
    this.isScrolled = scrollPosition > scrollHeight * 0.1;
  }
}
