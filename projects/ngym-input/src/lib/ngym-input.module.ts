import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupButtonComponent } from './input-group-button/input-group-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';

@NgModule({
  declarations: [
    InputGroupButtonComponent,
    InputTextComponent,
    InputPasswordComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    InputGroupButtonComponent,
    InputTextComponent,
    InputPasswordComponent
  ]
})
export class NgymInputModule { }