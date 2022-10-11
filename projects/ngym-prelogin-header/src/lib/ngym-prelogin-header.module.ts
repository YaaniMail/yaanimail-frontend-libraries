import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgymInputModule } from 'ngym-input';
import { NgymPreloginHeaderComponent } from './ngym-prelogin-header.component';

@NgModule({
  declarations: [
    NgymPreloginHeaderComponent
  ],
  imports: [
    CommonModule,
    NgymInputModule,
    RouterModule.forRoot([], {
      // preloadingStrategy: PreloadAllModules,
      // onSameUrlNavigation: 'ignore',
      onSameUrlNavigation: 'reload',
  }),
  ],
  exports: [
    NgymPreloginHeaderComponent
  ]
})
export class NgymPreloginHeaderModule { }
