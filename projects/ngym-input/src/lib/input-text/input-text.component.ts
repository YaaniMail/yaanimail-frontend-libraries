import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeTextAccessor } from '../accessors/typeTextAccessor';

@Component({
  selector: 'ngym-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['../assets/input.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
  }]
})
export class InputTextComponent extends InputTypeTextAccessor {
  @Input() customClass!: string;
  @Input() robotClass!: string;
  @Input() placeholder!: string;
  @Input() autoComplete!: string;
  @Input() required!: boolean;
  @Input() isInvalid!: boolean;
  @Input() pattern!: RegExp;

  constructor() {
    super();
  }

}
