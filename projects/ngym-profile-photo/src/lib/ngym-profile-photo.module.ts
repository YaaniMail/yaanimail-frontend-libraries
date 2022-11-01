import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstLettersPipe } from './pipes/firstLetters.pipe';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';

@NgModule({
  declarations: [
    FirstLettersPipe,
    ProfilePhotoComponent
  ],
  providers: [
    FirstLettersPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfilePhotoComponent
  ]
})
export class NgymProfilePhotoModule { }
