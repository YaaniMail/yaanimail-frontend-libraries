import { Component, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTypeTextAccessor } from '../accessors/typeTextAccessor';

@Component({
  selector: 'ngym-input-group-button-with-icon',
  templateUrl: './input-group-button-with-icon.component.html',
  styleUrls: ['../assets/input.scss', './input-group-button-with-icon.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputGroupButtonWithIconComponent),
    multi: true
  }]
})
export class InputGroupButtonWithIconComponent extends InputTypeTextAccessor {
  @Input() placeholder!: string;
  @Input() faRobotClass!: string;
  @Input() customInputGroupClass!: string;
  @Input() customInputClass!: string;
  @Input() faClass!: string;
  @Input() faIconLinkClass!: string;
  @Input() faIconClass!: string;
  @Input() showButton: boolean = true;
  @Output() onClickEmitter = new EventEmitter();
  @Output() onFocusOutEmitter = new EventEmitter();
  @Output() onKeyUpEmitter = new EventEmitter<string>();
  @ViewChild('iconTemplate', { read: ViewContainerRef }) iconTemplate!: ViewContainerRef;

  constructor() {
    super();
  }

  onClick(): void {
    this.onClickEmitter.emit();
  }

  onFocusOut(): void {
    this.onFocusOutEmitter.emit();
  }

  onKeyUp(value: string): void {
    this.onKeyUpEmitter.emit(value);
  }
}
