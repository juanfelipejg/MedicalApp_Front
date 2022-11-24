import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-create-form',
  templateUrl: './patient-create-form.component.html',
  styleUrls: ['./patient-create-form.component.css']
})
export class PatientCreateFormComponent implements OnInit {
  @Output()sendForm: EventEmitter<any>=new EventEmitter()
  form!: FormGroup;
  constructor(private fb:FormBuilder) {
  }

  buildForm(){
    this.form = this.fb.group({
      name: [''],
      identification: [''],
      lastName:  [''],
      phoneNumber:  [''],
      birthDate:  [''],
      rh:  [''],
      city:  ['']
    })
  }

  submit(): void{
    this.sendForm.emit(this.form.value)
  }

  ngOnInit(): void {
    this.buildForm()
  }

}
