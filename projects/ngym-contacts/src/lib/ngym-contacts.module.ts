import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { NgymInputModule } from 'ngym-input';

@NgModule({
  declarations: [
    CreateContactComponent,
    EditContactComponent,
    ViewContactComponent,
    ContactCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgymInputModule
  ],
  exports: [
    CreateContactComponent,
    ContactCardComponent
  ]
})
export class NgymContactsModule { }
