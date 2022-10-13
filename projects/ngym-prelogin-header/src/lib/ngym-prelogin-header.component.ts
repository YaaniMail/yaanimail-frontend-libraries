import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(
    private router: Router
  ) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
