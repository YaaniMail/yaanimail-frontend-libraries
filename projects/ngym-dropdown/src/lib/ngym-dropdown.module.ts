import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    DropdownComponent
  ]
})
export class NgymDropdownModule { }
