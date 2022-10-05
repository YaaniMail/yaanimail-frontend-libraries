import { NgModule } from '@angular/core';
import { TagComponent } from './tag/tag.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { TagContainerComponent } from './tag-container/tag-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputAutocompleteComponent } from './tag-input-autocomplete/tag-input-autocomplete.component';
import { InitialsPipe } from './pipe/initials.pipe';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    TagComponent,
    TagInputComponent,
    TagContainerComponent,
    TagInputAutocompleteComponent,
    InitialsPipe,
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TagComponent,
    TagInputComponent,
    TagContainerComponent
 ]
})
export class NgymChipsModule { }
