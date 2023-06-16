import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { QuickActionsComponent } from './quick-actions.component';
import { NgymDropdownModule } from 'ngym-dropdown';

@NgModule({
  declarations: [
    QuickActionsComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    NgymDropdownModule
  ],
  exports: [
    QuickActionsComponent
  ]
})
export class NgymQuickActionsModule { }
