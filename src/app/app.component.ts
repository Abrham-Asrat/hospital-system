import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DLayoutComponent } from './Pages/DoctorRole/d-layout/d-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hospital';
}
