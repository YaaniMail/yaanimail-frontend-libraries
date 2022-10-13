import { TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Logo } from './model/logo';
import * as i0 from "@angular/core";
export declare class NgymPreloginHeaderComponent {
    private router;
    logo: Logo;
    headerHtml: TemplateRef<any>;
    constructor(router: Router);
    navigateTo(route: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgymPreloginHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgymPreloginHeaderComponent, "ngym-prelogin-header", never, { "logo": "logo"; "headerHtml": "headerHtml"; }, {}, never, never>;
}
