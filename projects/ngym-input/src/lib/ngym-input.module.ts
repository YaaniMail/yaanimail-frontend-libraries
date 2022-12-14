import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupButtonComponent } from './input-group-button/input-group-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { CommonModule } from '@angular/common';
import { TagSelectComponent } from './tag-select/tag-select.component';

@NgModule({
  declarations: [
    InputGroupButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputSelectComponent,
    TagSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputGroupButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputSelectComponent,
    TagSelectComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgymInputModule { }
