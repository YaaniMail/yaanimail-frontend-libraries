import { Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Logo } from './model/logo';

@Component({
  selector: 'ngym-prelogin-header',
  templateUrl: 'ngym-prelogin-header.component.html',
  styleUrls: ['./ngym-prelogin-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgymPreloginHeaderComponent {
  @Input() logo!: Logo;
  @Input() headerHtml!: TemplateRef<any>;
  @Output() imageClickEmitter = new EventEmitter<boolean>();
  
  constructor() { }

  onImageClick(): void {
    this.imageClickEmitter.emit(true);
  }
}
