import { Component } from '@angular/core';


import { AboutHeaderComponent } from "../about-header/about-header.component";
import { AboutWorksComponent } from "../about-works/about-works.component";
import { AboutDoctorsComponent } from '../about-doctors/about-doctors.component';
import { AboutFutureComponent } from "../about-future/about-future.component";
@Component({
 selector : 'app-l-about',
  imports: [AboutDoctorsComponent, AboutHeaderComponent, AboutWorksComponent, AboutFutureComponent],
  templateUrl: './l-about.component.html',
  styleUrl: './l-about.component.css'
})
export class LAboutComponent {
 img: string = '../.../../../../../Images/doc2.jpg'
}
