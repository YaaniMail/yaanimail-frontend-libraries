import { Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngym-prelogin-header',
  templateUrl: 'ngym-prelogin-header.component.html',
  styleUrls: ['./ngym-prelogin-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgymPreloginHeaderComponent {
  @Input() logo!: string;
  @Input() imgWidth: string = '160';
  @Input() headerHtml!: TemplateRef<any>;
  @Input() imgWidth: string = '160';
  @Output() imageClickEmitter = new EventEmitter<boolean>();
  
  constructor() { }

  onImageClick(): void {
    this.imageClickEmitter.emit(true);
  }
}
