import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-record-create-form',
  templateUrl: './record-create-form.component.html',
  styleUrls: ['./record-create-form.component.css']
})
export class RecordCreateFormComponent implements OnInit {
  @Output()sendForm: EventEmitter<any>=new EventEmitter()
  form!: FormGroup;
  constructor(private fb:FormBuilder) {

  }

  buildForm(){
    this.form = this.fb.group({
      doctor: [''],
      patient: [''],
      creationDate:  [''],
      description:  [''],
      medicalExams:  [''],
      specialty_Referred_To:  ['']
    })
  }

  submit(): void{
    this.sendForm.emit(this.form.value)
  }

  ngOnInit(): void {
    this.buildForm()
  }

}
