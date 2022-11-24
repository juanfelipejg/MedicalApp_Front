import { Component, OnInit } from '@angular/core';
import { MedicalAppService } from 'src/app/services/medical-app.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  isUpdated = false
  patient: any = {};  
  patients: any[] = []

  constructor(private medicalAppService:MedicalAppService) { }

  
  submit(patient:any): void{  
    console.log(patient)
    if(this.isUpdated){
      this.medicalAppService.updatePatient(patient).subscribe()
    } else{
      this.medicalAppService.createPatient(patient).subscribe()
    }    
    this.medicalAppService.getPatients().subscribe((m:any) => this.patients=m);
  }

  updatePatient(patient: any): void{
    this.patient = patient
    this.isUpdated = true
  }

  deletePatient(id: any):void{
    this.medicalAppService.deletePatient(id).subscribe()
  }

  ngOnInit(): void {    
    this.medicalAppService.getPatients().subscribe((m:any) => this.patients=m);
  }
}
