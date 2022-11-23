import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MedicalAppService } from 'src/app/services/medical-app.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  isUpdated = false
  doctor: any = {};  
  doctors: any[] = []

  constructor(private medicalAppService:MedicalAppService) { }

  
  submit(doctor:any): void{  
    if(this.isUpdated){
      this.medicalAppService.updateDoctor(doctor).subscribe()
    } else{
      this.medicalAppService.createDoctor(doctor).subscribe()
    }    
  }

  updateDoctor(doctor: any): void{
    this.doctor = doctor
    this.isUpdated = true
  }

  ngOnInit(): void {    
    this.medicalAppService.getDoctors().subscribe((m:any) => this.doctors=m);
  }

}
