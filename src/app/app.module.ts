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
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorUpdateFormComponent } from './components/doctors/doctor-update-form/doctor-update-form.component';
import { DoctorCreateFormComponent } from './components/doctors/doctor-create-form/doctor-create-form.component';
import { PatientCreateFormComponent } from './components/patients/patient-create-form/patient-create-form.component';
import { PatientUpdateFormComponent } from './components/patients/patient-update-form/patient-update-form.component';
import { RecordCreateFormComponent } from './components/records/record-create-form/record-create-form.component';
import { RecordUpdateFormComponent } from './components/records/record-update-form/record-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DoctorsComponent,
    PatientsComponent,
    RecordsComponent,
    MedicinesComponent,
    DoctorUpdateFormComponent,
    DoctorCreateFormComponent,
    PatientCreateFormComponent,
    PatientUpdateFormComponent,
    RecordCreateFormComponent,
    RecordUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
