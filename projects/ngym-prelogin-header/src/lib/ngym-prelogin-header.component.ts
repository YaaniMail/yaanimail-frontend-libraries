import { Component, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Logo } from './model/logo';

@Component({
  selector: 'ngym-prelogin-header',
  templateUrl: 'ngym-prelogin-header.component.html',
  styleUrls: ['./ngym-prelogin-header.component.scss']
})
export class NgymPreloginHeaderComponent {
  test = 'yapız';
  @Input() logo!: Logo;
  @Input() headerHtml!: TemplateRef<any>;
  
  constructor(
    private router: Router
  ) { }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
