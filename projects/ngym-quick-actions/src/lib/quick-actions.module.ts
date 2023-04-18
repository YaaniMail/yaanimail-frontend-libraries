import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickActionsComponent } from './quick-actions.component';
import { NgymDropdownModule } from 'ngym-dropdown';

@NgModule({
  declarations: [
    QuickActionsComponent
  ],
  imports: [
    CommonModule,
    NgymDropdownModule
  ],
  exports: [
    QuickActionsComponent
  ]
})
export class NgymQuickActionsModule { }
