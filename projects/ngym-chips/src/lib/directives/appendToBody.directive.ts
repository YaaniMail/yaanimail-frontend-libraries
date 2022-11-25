import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appendToBody]"
})
export class AppendToBodyDirective implements AfterViewInit {
  @Input() public appendToBody!: boolean;
  constructor(private el: ElementRef) { }

  public ngAfterViewInit() {
    if (this.appendToBody) {
        const inputElement = document.getElementsByClassName('ngym-new-tag')[0] as HTMLElement;
        const tagTop = inputElement.getBoundingClientRect().top;
        document.body.appendChild(this.el.nativeElement);
        this.el.nativeElement.style.position = 'absolute';
        this.el.nativeElement.style.top = tagTop + inputElement.offsetHeight + 'px';
    }
  }
}