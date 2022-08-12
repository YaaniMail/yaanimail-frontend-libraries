import { NgModule } from '@angular/core';
import { TagComponent } from './tag/tag.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { TagContainerComponent } from './tag-container/tag-container.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputAutocompleteComponent } from './tag-input-autocomplete/tag-input-autocomplete.component';

@NgModule({
  declarations: [
    TagComponent,
    TagInputComponent,
    TagContainerComponent,
    TagInputAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TagComponent,
    TagInputComponent,
    TagContainerComponent
  ]
})
export class NgymChipsModule { }
