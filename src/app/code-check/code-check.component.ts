import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'app-code-check',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './code-check.component.html',
  styleUrls: [
    '../../../node_modules/simple-keyboard/build/css/index.css',
    './code-check.component.scss',
  ]
})
export class CodeCheckComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  value = "";
  keyboard: Keyboard;

  ngAfterViewInit() {
    this.keyboard = new Keyboard('.code-check-keyboard', {
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      layout: {
        default: ["1 2 3", "4 5 6", "7 8 9", "{clear} 0 {backspace}"],
      },
      theme: "hg-theme-default hg-layout-numeric numeric-theme",
      display: {
        "{clear}": "X",
        "{backspace}": "🡰",
      }
    });
  }

  onBack() {
    this.location.back();
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    if (button === "{clear}") {
      this.keyboard.clearInput();
      this.value = '';
    }
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  onSubmit() {
    this.router.navigate(['/code']);
  }
}
