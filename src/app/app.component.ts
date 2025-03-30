import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NormComponent } from './norm/norm.component';

@Component({
  selector: 'app-root',
  imports: [NormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'norm-compute';
}
