import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';
import {MaterialModule, MdButtonModule, MdCheckboxModule} from '@angular/material'; //denne er hentet fra angular-material, steg 1 av 4
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs'; //steg 4 i angular-material

import {LoginService} from './services/login.service';
import {AddNewBookComponent} from './components/add-new-book/add-new-book.component';  //steg 1 for å legge til ny service
import {AddBookService} from './services/add-book.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    MdButtonModule,     //deretter deklarert etter import, steg 2 av  4
    MdCheckboxModule,    //steg 3 er å importere inn i styles.css filen
    BrowserAnimationsModule
  ],
  providers: [LoginService, AddBookService],    //steg 2 for å legge til ny service
  bootstrap: [AppComponent]
})
export class AppModule { }
