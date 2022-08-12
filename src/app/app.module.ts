import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgymChipsModule } from 'projects/ngym-chips/src/public-api';
import { NgymHomeModule } from 'projects/ngym-home/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgymHomeModule,
    NgymChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
