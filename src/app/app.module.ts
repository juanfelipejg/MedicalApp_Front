import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { RouterModule,  } from '@angular/router';
import { ROUTES } from './app.routes';
import { PatientsComponent } from './components/patients/patients.component';
import { RecordsComponent } from './components/records/records.component';
import { MedicinesComponent } from './components/medicines/medicines.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DoctorsComponent,
    PatientsComponent,
    RecordsComponent,
    MedicinesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
