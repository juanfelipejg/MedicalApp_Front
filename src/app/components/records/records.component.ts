import { Component, OnInit } from '@angular/core';
import { MedicalAppService } from 'src/app/services/medical-app.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  isUpdated = false
  record: any = {};  
  records: any[] = []

  constructor(private medicalAppService:MedicalAppService) { }
  
  submit(record:any): void{  
    if(this.isUpdated){
      this.medicalAppService.updateRecord(record).subscribe()
    } else{
      this.medicalAppService.createRecord(record).subscribe()
    }    
    this.medicalAppService.getRecords().subscribe((m:any) => this.records=m);
  }

  updateRecord(record: any): void{
    this.record = record
    this.isUpdated = true
  }

  deleteRecord(id: any):void{
    this.medicalAppService.deleteRecord(id).subscribe()
  }


  ngOnInit(): void {    
    this.medicalAppService.getRecords().subscribe((m:any) => this.records=m);
  }

}
