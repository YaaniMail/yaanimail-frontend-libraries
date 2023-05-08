import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgymChipsModule } from 'projects/ngym-chips/src/public-api';
import { NgymHomeModule } from 'projects/ngym-home/src/public-api';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WebService } from './service/web.service';
import { NgymPreloginHeaderModule } from 'ngym-prelogin-header';
import { NgymContactsModule } from 'projects/ngym-contacts/src/lib/ngym-contacts.module';
import { NgymInputModule } from 'projects/ngym-input/src/public-api';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LayoutModule } from './layout/layout.module';
import { ChipsComponent } from './pages/chips/chips.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { FormsComponent } from './pages/forms/forms.component';
import { InputSelectComponent } from './pages/inputs/input-select/input-select.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { ViewContactComponent } from './pages/view-contact/view-contact.component';
import { NgymDropdownModule } from 'ngym-dropdown';
import { NgymQuickActionsModule } from 'ngym-quick-actions';
import { NgymCountInfoModule } from 'ngym-count-info';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { QuickActionsComponent } from './pages/quick-actions/quick-actions.component';
import { CountInfoComponent } from './pages/count-info/count-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChipsComponent,
    InputSelectComponent,
    NewContactComponent,
    EditContactComponent,
    ViewContactComponent,
    DropdownComponent,
    QuickActionsComponent,
    CountInfoComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    NgymHomeModule,
    NgymChipsModule,
    NgymInputModule,
    NgymPreloginHeaderModule,
    NgymContactsModule,
    NgymDropdownModule,
    NgymQuickActionsModule,
    NgymCountInfoModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [RouterModule, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
