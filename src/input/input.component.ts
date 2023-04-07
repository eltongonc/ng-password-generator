import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
})
export class InputComponent {
  @Input() type!: 'checkbox' | 'string' | 'number';
  @Input() label!: string;
  @Input() checked = false;
  @Input() value!: string | number;
  @Output() handleCheck = new EventEmitter<boolean>(false);
  @Output() handleInput = new EventEmitter<string>();

  onCheck(e: Event) {
    const { checked } = e.target as HTMLInputElement;

    this.checked = checked;
    this.handleCheck.emit(checked);
  }

  onInput(e: Event) {
    const { value } = e.target as HTMLInputElement;

    this.value = value;
    this.handleInput.emit(value);
  }
}
