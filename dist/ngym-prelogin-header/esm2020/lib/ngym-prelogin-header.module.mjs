import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgymPreloginHeaderComponent } from './ngym-prelogin-header.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class NgymPreloginHeaderModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd5bS1wcmVsb2dpbi1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd5bS1wcmVsb2dpbi1oZWFkZXIvc3JjL2xpYi9uZ3ltLXByZWxvZ2luLWhlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFrQi9FLE1BQU0sT0FBTyx3QkFBd0I7O3NIQUF4Qix3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkFkakMsMkJBQTJCLGFBRzNCLFlBQVksOEJBUVosMkJBQTJCO3VIQUdsQix3QkFBd0IsWUFaMUI7WUFDUCxZQUFZO1lBQ1osWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZCLHlDQUF5QztnQkFDekMsaUNBQWlDO2dCQUNqQyxtQkFBbUIsRUFBRSxRQUFRO2FBQ2hDLENBQUM7U0FDRDs0RkFLVSx3QkFBd0I7a0JBaEJwQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFOzRCQUN2Qix5Q0FBeUM7NEJBQ3pDLGlDQUFpQzs0QkFDakMsbUJBQW1CLEVBQUUsUUFBUTt5QkFDaEMsQ0FBQztxQkFDRDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsMkJBQTJCO3FCQUM1QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5neW1QcmVsb2dpbkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbmd5bS1wcmVsb2dpbi1oZWFkZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd5bVByZWxvZ2luSGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW10sIHtcbiAgICAgIC8vIHByZWxvYWRpbmdTdHJhdGVneTogUHJlbG9hZEFsbE1vZHVsZXMsXG4gICAgICAvLyBvblNhbWVVcmxOYXZpZ2F0aW9uOiAnaWdub3JlJyxcbiAgICAgIG9uU2FtZVVybE5hdmlnYXRpb246ICdyZWxvYWQnXG4gIH0pLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd5bVByZWxvZ2luSGVhZGVyQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd5bVByZWxvZ2luSGVhZGVyTW9kdWxlIHsgfVxuIl19