import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgymPreloginHeaderComponent } from './ngym-prelogin-header.component';

@NgModule({
  declarations: [
    NgymPreloginHeaderComponent
  ],
  imports: [
    CommonModule,
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
