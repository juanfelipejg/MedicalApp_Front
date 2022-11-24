import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-record-update-form',
  templateUrl: './record-update-form.component.html',
  styleUrls: ['./record-update-form.component.css']
})
export class RecordUpdateFormComponent implements OnInit {
  @Input() record: any;
  @Output()sendForm: EventEmitter<any>=new EventEmitter()
  form!: FormGroup;
  constructor(private fb:FormBuilder) {
  }

  buildForm(){
    this.form = this.fb.group({
      id: [this.record.id ?? ''],
      doctor: [this.record.doctor ?? ''],
      patient: [this.record.patient ?? ''],
      creationDate:  [this.record.creationDate ?? ''],
      description:  [this.record.description ?? ''],
      medicalExams:  [this.record.medicalExams ?? ''],
      specialty_Referred_To:  [this.record.specialty_Referred_To ?? '']
    })
  }

  submit(): void{
    this.sendForm.emit(this.form.value)
  }

  ngOnInit(): void {
    this.buildForm()
  }

}
