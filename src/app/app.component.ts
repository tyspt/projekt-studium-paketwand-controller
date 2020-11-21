import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekt-studium-paketwand-controller';

  constructor() {
  }

  @HostListener('window:pywebviewready', ['$event'])
  onPywebviewReady() {

  }
}
