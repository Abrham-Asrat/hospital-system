import { Component } from '@angular/core';
import { AboutHeaderComponent } from '../about-header/about-header.component';
import { AboutDoctorComponent } from '../about-doctor/about-doctor.component';
import { AboutFutureComponent } from '../about-future/about-future.component';
import { AboutWorksComponent } from '../about-works/about-works.component';

@Component({
  selector: 'app-l-about',
  imports: [AboutHeaderComponent, AboutFutureComponent, AboutWorksComponent],
  templateUrl: './l-about.component.html',
  styleUrl: './l-about.component.css',
})
export class LAboutComponent {}
