import { Component } from '@angular/core';
import { AboutdoctorsComponent } from "../about/aboutdoctors/aboutdoctors.component";
import { AboutheaderComponent } from "../about/aboutheader/aboutheader.component";
import { AboutworksComponent } from "../about/aboutworks/aboutworks.component";
import { AboutfutureComponent } from "../about/aboutfuture/aboutfuture.component";

@Component({
  selector: 'app-l-about',
  imports: [AboutworksComponent, AboutheaderComponent, AboutfutureComponent, AboutdoctorsComponent],
  templateUrl: './l-about.component.html',
  styleUrl: './l-about.component.css'
})
export class LAboutComponent {
  img: string = '../.../../../../../Images/doc2.jpg'
}
