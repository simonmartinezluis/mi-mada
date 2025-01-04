import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// primeNG
import { ButtonModule } from 'primeng/button';

import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
