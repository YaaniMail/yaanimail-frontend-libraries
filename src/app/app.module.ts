import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgymChipsModule } from 'projects/ngym-chips/src/public-api';
import { NgymHomeModule } from 'projects/ngym-home/src/public-api';
import { NgymInputModule } from 'projects/ngym-input/src/dist';
import { NgymContactModule } from 'projects/ngym-contact/src/public-api';
import { AppComponent } from './app.component';

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
    NgymContactModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
