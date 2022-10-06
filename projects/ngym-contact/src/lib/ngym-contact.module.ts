import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// TODO: NilS
import { NgymInputModule } from 'projects/ngym-input/src/dist';
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
    NgymInputModule
  ],
  exports: [
    InfiniteScrollModule,
    NgymInputModule,
    AddContactComponent
  ]
})
export class NgymContactModule { }
