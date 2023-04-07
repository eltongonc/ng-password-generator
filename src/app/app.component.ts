import { Component } from '@angular/core';

type CheckBoxType = 'letter' | 'number' | 'symbol';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Password Generator';

  length = 10;
  hasLetters = true;
  hasNumbers = false;
  hasSymbols = false;

  password = '';

  onSetLength(e: Event) {
    const val = +(e.target as HTMLInputElement).value;

    this.length = val;
  }

  onCheck(type: CheckBoxType, e: Event) {
    const { checked } = e.target as HTMLInputElement;

    switch (type) {
      case 'letter':
        this.hasLetters = checked;
        break;
      case 'number':
        this.hasNumbers = checked;
        break;
      case 'symbol':
        this.hasSymbols = checked;
        break;

      default:
        break;
    }
  }

  onGeneratePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    let output = '';

    let all = '';

    if (this.hasLetters) {
      all = all.concat(letters);
    }

    if (this.hasNumbers) {
      all = all.concat(numbers);
    }

    if (this.hasSymbols) {
      all = all.concat(symbols);
    }

    for (let i = 0; i < this.length; i++) {
      const char = all[Math.floor(Math.random() * all.length)];
      output = `${output}${char}`;
    }

    this.password = output;
  }
}
