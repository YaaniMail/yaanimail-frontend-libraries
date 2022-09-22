import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TypeSelectAccessor } from '../accessors/typeSelectAccessor';

@Component({
  selector: 'ngym-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['../assets/input.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true
    }
  ]
})
export class InputSelectComponent extends TypeSelectAccessor {
  @Input() options!: string[];
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  selectionChanged(value: string) {
    this.selectionChange.emit(value);
    this.onChange(value);
    this.onTouched();
  } 
}
