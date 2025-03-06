import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doc-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './doc-layout.component.html',
  styleUrl: './doc-layout.component.css',
})
export class DocLayoutComponent {}
