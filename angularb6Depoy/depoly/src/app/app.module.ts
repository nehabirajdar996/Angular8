import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from './myform/myform.component';
import { CircleComponent } from './circle/circle.component';
import { NewcComponent } from './circle/newc/newc.component';

@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    CircleComponent,
    NewcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
