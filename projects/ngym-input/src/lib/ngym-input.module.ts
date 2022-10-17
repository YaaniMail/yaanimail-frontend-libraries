import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputGroupButtonComponent } from './input-group-button/input-group-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputGroupButtonWithIconComponent } from './input-group-button-with-icon/input-group-button-with-icon.component';

@NgModule({
  declarations: [
    InputGroupButtonComponent,
    InputGroupButtonWithIconComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputGroupButtonComponent,
    InputGroupButtonWithIconComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputSelectComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgymInputModule { }
