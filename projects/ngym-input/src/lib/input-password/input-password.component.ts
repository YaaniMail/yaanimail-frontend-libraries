import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeTextAccessor } from '../accessors/typeTextAccessor';

@Component({
  selector: 'ngym-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['../assets/input.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputPasswordComponent),
    multi: true
  }]
})
export class InputPasswordComponent extends InputTypeTextAccessor {
  @Input() placeholder!: string;

  constructor() {
    super();
  }

}
