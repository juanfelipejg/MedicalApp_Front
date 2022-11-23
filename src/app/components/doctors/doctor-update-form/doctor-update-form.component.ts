import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-update-form',
  templateUrl: './doctor-update-form.component.html',
  styleUrls: ['./doctor-update-form.component.css']
})
export class DoctorUpdateFormComponent implements OnInit {
  @Input() doctor: any;
  @Output()sendForm: EventEmitter<any>=new EventEmitter()
  form!: FormGroup;
  constructor(private fb:FormBuilder) {

  }

  buildForm(){
    this.form = this.fb.group({
      name: [this.doctor.name ?? ''],
      identification: [this.doctor.identification ?? ''],
      lastName:  [this.doctor.lastName ?? ''],
      phoneNumber:  [this.doctor.phoneNumber ?? ''],
      office:  [this.doctor.office ?? ''],
      schedule:  [this.doctor.schedule ?? ''],
      specialty:  [this.doctor.specialty ?? '']
    })
  }

  submit(): void{
    this.sendForm.emit(this.form.value)
  }

  ngOnInit(): void {
    this.buildForm()
  }
}
