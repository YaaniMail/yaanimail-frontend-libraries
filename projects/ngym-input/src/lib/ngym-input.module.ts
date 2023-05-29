import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagSelectComponent } from './tag-select/tag-select.component';

@NgModule({
  declarations: [
    TagSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TagSelectComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NgymInputModule { }
