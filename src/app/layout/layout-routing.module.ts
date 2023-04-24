import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsComponent } from '../pages/chips/chips.component';
import { FormsComponent } from '../pages/forms/forms.component';
import { NewContactComponent } from '../pages/new-contact/new-contact.component';
import { InputSelectComponent } from '../pages/inputs/input-select/input-select.component';
import { EditContactComponent } from '../pages/edit-contact/edit-contact.component';
import { ViewContactComponent } from '../pages/view-contact/view-contact.component';
import { DropdownComponent } from '../pages/dropdown/dropdown.component';
import { QuickActionsComponent } from '../pages/quick-actions/quick-actions.component';
import { CountInfoComponent } from '../pages/count-info/count-info.component';

const routes: Routes = [
  { path: 'chips', component: ChipsComponent },
  { path: 'input-select', component: InputSelectComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path: 'edit-contact', component: EditContactComponent },
  { path: 'view-contact', component: ViewContactComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'quick-actions', component: QuickActionsComponent },
  { path: 'count-info', component: CountInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
