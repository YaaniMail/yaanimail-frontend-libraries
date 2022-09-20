import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngym-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['../assets/input.scss'],
})
export class InputSelectComponent {
  @Input() options!: string[];
  @Output() onChangeEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectChange(): void {
    this.onChangeEmitter.emit();
  }

}
