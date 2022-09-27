import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupButtonComponent } from './input-group-button/input-group-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { CommonModule } from '@angular/common';
import { TestBindComponent } from './test-bind/test-bind.component';

@NgModule({
  declarations: [
    InputGroupButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    InputSelectComponent,
    TestBindComponent
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
    TestBindComponent
  ]
})
export class NgymInputModule { }
