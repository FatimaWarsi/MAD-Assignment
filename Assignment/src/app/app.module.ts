import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NameFormatPipe} from "./nFormat";
import {AgeFormatPipe} from "./AgeFormat";
import {EmailFormatPipe} from "./Email";
import {FormsModule} from "@angular/Forms";
import { AppComponent } from './app.component';
import {ContactFormatPipe} from './Contact';
import {DateFormatPipe} from './DateFormat';


@NgModule({
  declarations: [
    AppComponent,
    NameFormatPipe,
    AgeFormatPipe,
    EmailFormatPipe,
    ContactFormatPipe,
    DateFormatPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
