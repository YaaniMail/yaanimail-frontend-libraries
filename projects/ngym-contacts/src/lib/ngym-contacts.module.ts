import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgymInputModule } from 'ngym-input';
import { CreateContactComponent } from './create-contact/create-contact.component';

@NgModule({
  declarations: [
    CreateContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgymInputModule
  ],
  exports: [
    CreateContactComponent
  ]
})
export class NgymContactsModule { }
