import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroBirthday1Component } from './hero-birthday1/hero-birthday1.component';
import { AppRoutingModule } from './app-routing.module';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroBirthday1Component,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
