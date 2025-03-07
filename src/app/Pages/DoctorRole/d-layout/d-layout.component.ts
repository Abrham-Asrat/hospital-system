import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-d-layout',
  imports: [RouterOutlet, RouterLink,NgClass],
  templateUrl: './d-layout.component.html',
  styleUrl: './d-layout.component.css',
})
export class DLayoutComponent {
  activeTab: string = 'home';

  setActive(tab: string) {
    this.activeTab = tab;
  }
}
