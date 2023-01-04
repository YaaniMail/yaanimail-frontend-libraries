import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsComponent } from '../pages/chips/chips.component';
import { ContentComponent } from '../pages/content/content.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { InputsComponent } from '../pages/inputs/inputs.component';
import { NewContactComponent } from '../pages/new-contact/new-contact.component';

const routes: Routes = [
  { path: 'chips', component: ChipsComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'forms', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
