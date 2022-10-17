import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgymChipsModule } from 'ngym-chips';
import { NgymInputModule } from 'ngym-input';
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
    NgymChipsModule
  ],
  exports: [
    InfiniteScrollModule,
    NgymInputModule,
    NgymChipsModule,
    AddContactComponent
  ]
})
export class NgymContactModule { }
