import { Routes } from "@angular/router";
import { DoctorsComponent } from "./components/doctors/doctors.component";
import { HomeComponent } from "./components/home/home.component";
import { MedicinesComponent } from "./components/medicines/medicines.component";
import { PatientsComponent } from "./components/patients/patients.component";
import { RecordsComponent } from "./components/records/records.component";

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'doctors', component: DoctorsComponent},
    { path: 'records', component: RecordsComponent},
    { path: 'patients', component: PatientsComponent},
    { path: 'medicines', component: MedicinesComponent}
]