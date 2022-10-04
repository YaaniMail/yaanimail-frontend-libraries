import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgymChipsModule } from 'projects/ngym-chips/src/public-api';
import { NgymHomeModule } from 'projects/ngym-home/src/public-api';
import { NgymInputModule } from 'projects/ngym-input/src/dist';
import { AppComponent } from './app.component';
import { NgymPreloginHeaderModule } from 'projects/ngym-prelogin-header/src/public-api';
import { RouterModule } from '@angular/router';

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
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
