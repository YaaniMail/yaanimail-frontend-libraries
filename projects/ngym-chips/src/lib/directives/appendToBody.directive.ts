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
        const tagInputTop = inputElement.getBoundingClientRect().top;
        const tagInputLeft = inputElement.getBoundingClientRect().left;
        this.el.nativeElement.style.position = 'absolute';
        this.el.nativeElement.style.zIndex = '999999';
        this.el.nativeElement.style.top = tagInputTop + inputElement.offsetHeight + 'px';
        this.el.nativeElement.style.left = tagInputLeft + 'px';
        document.body.appendChild(this.el.nativeElement);
    }
  }
}