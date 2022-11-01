import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgymChipsModule } from 'ngym-chips';
import { NgymInputModule } from 'ngym-input';
import { NgymProfilePhotoModule } from 'ngym-profile-photo';
import { AddContactRowComponent } from './add-contact-row/add-contact-row.component';
import { AddContactComponent } from './add-contact/add-contact.component';


@NgModule({
  declarations: [
    AddContactComponent,
    AddContactRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgymInputModule,
    NgymChipsModule,
    NgymProfilePhotoModule
  ],
  exports: [
    InfiniteScrollModule,
    NgymInputModule,
    NgymChipsModule,
    NgymProfilePhotoModule,
    AddContactComponent
  ]
})
export class NgymContactModule { }
