import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeTextAccessor } from '../accessors/typeTextAccessor';

@Component({
  selector: 'ngym-input-group-button',
  templateUrl: './input-group-button.component.html',
  styleUrls: ['../assets/input.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputGroupButtonComponent),
    multi: true
  }]
})
export class InputGroupButtonComponent extends InputTypeTextAccessor {
  @Input() placeholder!: string;
  @Input() faRobotClass!: string;
  @Input() faClass!: string;
  @Output() onClickEmitter = new EventEmitter();
  @Output() onFocusOutEmitter = new EventEmitter();

  constructor() {
    super();
  }

  onClick(): void {
    this.onClickEmitter.emit();
  }

  onFocusOut(): void {
    this.onFocusOutEmitter.emit();
  }

}
