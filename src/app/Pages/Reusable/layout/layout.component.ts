import { NgClass, UpperCasePipe } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SignUpComponent } from "../../Landing/sign-up/sign-up.component";
import { LoginComponent } from "../../Landing/log-in/log-in.component";
import { OTPComponent } from "../../Landing/otp/otp.component";

@Component({
  selector: 'app-layout',
  imports: [NgClass, RouterLink, RouterOutlet, UpperCasePipe, SignUpComponent, LoginComponent, OTPComponent],
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
