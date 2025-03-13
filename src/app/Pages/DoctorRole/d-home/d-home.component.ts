import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d-home',
  imports: [],
  templateUrl: './d-home.component.html',
  styleUrl: './d-home.component.css',
})
export class DHomeComponent {
  constructor(private routes: Router) {}
  Navigator(nav: string) {
    this.routes.navigateByUrl(nav);
  }
}
