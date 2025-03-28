import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hospital';
  constructor() {
    console.log('🔥 Constructor:', this.constructor.name);
  }

  ngOnInit() {
    console.log('🚀 ngOnInit:', this.constructor.name);
  }
}