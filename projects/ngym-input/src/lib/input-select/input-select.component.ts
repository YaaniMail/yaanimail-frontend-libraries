import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class InputSelectComponent implements ControlValueAccessor {
  @Input() options!: string[];
  @Output() onChangeEmitter = new EventEmitter();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectionChanged(value: string) {
    console.log(value);
    this.selectionChange.emit(value);
    this.onChange(value);
    this.onTouched();
  } 

  // ControlValueAccessor Implementation
  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    //this.value = value;
  }

  setDisabledState(isDisabled: boolean) {
    //this.disabled = isDisabled;
  }

}
