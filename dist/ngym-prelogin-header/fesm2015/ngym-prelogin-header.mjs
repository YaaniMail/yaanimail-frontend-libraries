import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgymPreloginHeaderComponent {
    constructor(router) {
        this.router = router;
    }
    navigateTo(route) {
        this.router.navigate([route]);
    }
}
NgymPreloginHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgymPreloginHeaderComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
NgymPreloginHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: NgymPreloginHeaderComponent, selector: "ngym-prelogin-header", inputs: { logo: "logo", headerHtml: "headerHtml" }, ngImport: i0, template: "<nav class=\"navbar fixed-top bg-white\">\n    <div class=\"container justify-content-between\">\n        <div id=\"header-brand-logo\">\n            <a (click)=\"navigateTo(logo?.url)\">\n                <img src=\"{{ logo?.src }}\" class=\"img-fluid\" width=\"100%\">\n            </a>\n        </div>\n        <div class=\"d-flex align-items-center\">\n            <ng-container *ngTemplateOutlet=\"headerHtml\">\n            </ng-container>\n        </div>\n    </div>\n</nav>", styles: ["#header-brand-logo{width:160px;height:40px;overflow:hidden}\n"], directives: [{ type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgymPreloginHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngym-prelogin-header', template: "<nav class=\"navbar fixed-top bg-white\">\n    <div class=\"container justify-content-between\">\n        <div id=\"header-brand-logo\">\n            <a (click)=\"navigateTo(logo?.url)\">\n                <img src=\"{{ logo?.src }}\" class=\"img-fluid\" width=\"100%\">\n            </a>\n        </div>\n        <div class=\"d-flex align-items-center\">\n            <ng-container *ngTemplateOutlet=\"headerHtml\">\n            </ng-container>\n        </div>\n    </div>\n</nav>", styles: ["#header-brand-logo{width:160px;height:40px;overflow:hidden}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; }, propDecorators: { logo: [{
                type: Input
            }], headerHtml: [{
                type: Input
            }] } });

class NgymPreloginHeaderModule {
}
NgymPreloginHeaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgymPreloginHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgymPreloginHeaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgymPreloginHeaderModule, declarations: [NgymPreloginHeaderComponent], imports: [CommonModule, i1.RouterModule], exports: [NgymPreloginHeaderComponent] });
NgymPreloginHeaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgymPreloginHeaderModule, imports: [[
            CommonModule,
            RouterModule.forRoot([], {
                // preloadingStrategy: PreloadAllModules,
                // onSameUrlNavigation: 'ignore',
                onSameUrlNavigation: 'reload'
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NgymPreloginHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgymPreloginHeaderComponent
                    ],
                    imports: [
                        CommonModule,
                        RouterModule.forRoot([], {
                            // preloadingStrategy: PreloadAllModules,
                            // onSameUrlNavigation: 'ignore',
                            onSameUrlNavigation: 'reload'
                        }),
                    ],
                    exports: [
                        NgymPreloginHeaderComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngym-prelogin-header
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgymPreloginHeaderComponent, NgymPreloginHeaderModule };
//# sourceMappingURL=ngym-prelogin-header.mjs.map
