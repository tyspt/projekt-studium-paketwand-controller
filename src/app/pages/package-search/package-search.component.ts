import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import Keyboard from 'simple-keyboard';

@Component({
  selector: 'app-package-search',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './package-search.component.html',
  styleUrls: [
    '/node_modules/simple-keyboard/build/css/index.css',
    './package-search.component.scss']
})
export class PackageSearchComponent implements OnInit, AfterViewInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  loaded$: Observable<boolean> = of(true).pipe(delay(500));

  value = '';
  keyboard: Keyboard;

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    await this.loaded$.toPromise();
    this.keyboard = new Keyboard('.package-search-keyboard', {
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
    });
  }

  onBack = () => this.location.back();

  onChange = (input: string) => {
    this.value = input;
    console.log('Input changed', input);
  }

  onKeyPress = (button: string) => {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') { this.handleShift(); }

    if (button === '{enter}') {
      this.onSubmit();
    }
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  }

  handleShift = () => {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }

  onSubmit = () => {
    if (!this.value?.trim()) { return; }
    this.router.navigate(['/code']);
  }
}
