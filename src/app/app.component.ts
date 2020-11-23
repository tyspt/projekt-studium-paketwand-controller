import { Component, HostListener } from '@angular/core';

import { PywebviewService } from './services/pywebview.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekt-studium-smart-locker-controller';

  constructor(private pywebviewService: PywebviewService) { }

  @HostListener('window:pywebviewready', ['$event'])
  onPywebviewReady(): void {
    this.pywebviewService.api = (window as any).pywebview.api;
  }
}
