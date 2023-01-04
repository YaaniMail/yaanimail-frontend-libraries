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
import { NgymInputModule } from 'projects/ngym-input/src/dist';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { LayoutModule } from './layout/layout.module';
import { ChipsComponent } from './pages/chips/chips.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { FormsComponent } from './pages/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChipsComponent,
    InputsComponent,
    NewContactComponent,
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
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [RouterModule, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
