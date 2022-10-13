import { AfterViewInit, Component, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
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
export class InputGroupButtonComponent extends InputTypeTextAccessor implements AfterViewInit {
  @Input() placeholder!: string;
  @Input() faRobotClass!: string;
  @Input() customInputClass!: string;
  @Input() faClass!: string;
  @Input() showButton: boolean = true;
  @Input() showIcon: boolean = false;
  @Input() iconTemplateRef!: TemplateRef<any>;
  @Output() onClickEmitter = new EventEmitter();
  @Output() onFocusOutEmitter = new EventEmitter();
  @Output() onKeyUpEmitter = new EventEmitter<string>();
  @ViewChild('iconTemplate', { read: ViewContainerRef }) iconTemplate!: ViewContainerRef;

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.iconTemplate.createEmbeddedView(this.iconTemplateRef);
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
