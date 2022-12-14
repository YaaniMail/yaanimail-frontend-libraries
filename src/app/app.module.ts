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
import { NgymInputModule } from 'ngym-input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgymHomeModule,
    NgymChipsModule,
    NgymInputModule,
    NgymPreloginHeaderModule,
    NgymContactsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [RouterModule, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
