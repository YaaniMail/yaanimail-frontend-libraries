import { Component, forwardRef } from '@angular/core';
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

  constructor() {
    super();
  }

}
