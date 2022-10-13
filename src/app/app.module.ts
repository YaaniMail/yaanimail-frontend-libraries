import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgymChipsModule } from 'projects/ngym-chips/src/public-api';
import { NgymHomeModule } from 'projects/ngym-home/src/public-api';
import { NgymInputModule } from 'projects/ngym-input/src/dist';
import { NgymContactModule } from 'projects/ngym-contact/src/public-api';
import { AppComponent } from './app.component';
import { NgymPreloginHeaderModule } from 'projects/ngym-prelogin-header/src/public-api';
import { RouterModule } from '@angular/router';
import { WebService } from './service/web.service';

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
    NgymContactModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [RouterModule, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
