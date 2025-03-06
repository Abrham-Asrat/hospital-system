import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DocLayoutComponent } from './Pages/DoctorRole/doc-layout/doc-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DocLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hospital';
}
