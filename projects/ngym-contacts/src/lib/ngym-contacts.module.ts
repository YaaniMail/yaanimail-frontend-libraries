import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgymInputModule } from 'ngym-input';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

@NgModule({
  declarations: [
    CreateContactComponent,
    EditContactComponent,
    ViewContactComponent
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
