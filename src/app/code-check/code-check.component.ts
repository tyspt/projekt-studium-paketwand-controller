import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import Keyboard from 'simple-keyboard';

import { PywebviewService } from '../services/pywebview.service';

@Component({
  selector: 'app-code-check',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './code-check.component.html',
  styleUrls: [
    '../../../node_modules/simple-keyboard/build/css/index.css',
    './code-check.component.scss',
  ]
})
export class CodeCheckComponent implements OnInit, AfterViewInit {

  constructor(
    private location: Location,
    private router: Router,
    private pywebviewService: PywebviewService
  ) { }

  value = '';
  keyboard: Keyboard;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.keyboard = new Keyboard('.code-check-keyboard', {
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      layout: {
        default: ['1 2 3', '4 5 6', '7 8 9', '{clear} 0 {backspace}'],
      },
      theme: 'hg-theme-default hg-layout-numeric numeric-theme',
      display: {
        '{clear}': 'X',
        '{backspace}': '🡰',
      }
    });
  }

  onBack(): void {
    this.location.back();
  }

  onChange = (input: string) => {
    this.value = input;
    console.log('Input changed', input);
  }

  onKeyPress = (button: string) => {
    console.log('Button pressed', button);

    if (button === '{clear}') {
      this.keyboard.clearInput();
      this.value = '';
    }
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  }

  onSubmit(): void {
    console.log(this.value);
    if (this.value === '4711') {
      this.pywebviewService.api ? this.pywebviewService.api.unlock_door() : alert('Python api not available!');
      alert('Door has been successfully unlocked!');
      setTimeout(() => this.router.navigate(['/']), 10000);
    } else {
      this.value = '';
      alert('Invalid code, please try again!');
    }
  }
}
