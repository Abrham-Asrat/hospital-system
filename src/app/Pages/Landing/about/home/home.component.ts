import { Component } from '@angular/core';
import { AboutHeaderComponent } from "../about-header/about-header.component";
import { AboutFutureComponent } from "../about-future/about-future.component";

@Component({
  selector: 'app-home',
  imports: [AboutHeaderComponent, AboutFutureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
