import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { NgymInputModule } from 'ngym-input';
import { ViewFieldComponent } from '../public-api';
import { HomeNumberPipe } from './pipe/home-number.pipe';
import { MsisdnPipe } from './pipe/msisdn.pipe';

@NgModule({
  declarations: [
    CreateContactComponent,
    EditContactComponent,
    ViewContactComponent,
    ContactCardComponent,
    ViewFieldComponent,
    HomeNumberPipe,
    MsisdnPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgymInputModule
  ],
  exports: [
    CreateContactComponent,
    EditContactComponent,
    ContactCardComponent,
    ViewContactComponent,
    ViewFieldComponent
  ]
})
export class NgymContactsModule { }
