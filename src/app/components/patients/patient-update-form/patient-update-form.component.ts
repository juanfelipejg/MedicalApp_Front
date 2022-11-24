import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-update-form',
  templateUrl: './patient-update-form.component.html',
  styleUrls: ['./patient-update-form.component.css']
})
export class PatientUpdateFormComponent implements OnInit {
  @Input() patient: any;
  @Output()sendForm: EventEmitter<any>=new EventEmitter()
  form!: FormGroup;
  constructor(private fb:FormBuilder) {
  }

  buildForm(){
    this.form = this.fb.group({
      name: [this.patient.name ?? ''],
      identification: [this.patient.identification ?? ''],
      lastName:  [this.patient.lastName ?? ''],
      phoneNumber:  [this.patient.phoneNumber ?? ''],
      birthDate:  [this.patient.birthDate ?? ''],
      rh:  [this.patient.rh ?? ''],
      city:  [this.patient.city ?? '']
    })
  }

  submit(): void{
    this.sendForm.emit(this.form.value)
  }

  ngOnInit(): void {
    this.buildForm()
  }
}
