import { Component, createPlatform, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-create-form',
  templateUrl: './doctor-create-form.component.html',
  styleUrls: ['./doctor-create-form.component.css']
})
export class DoctorCreateFormComponent implements OnInit {
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
      office:  [''],
      schedule:  [''],
      specialty:  ['']
    })
  }

  submit(): void{
    this.sendForm.emit(this.form.value)
  }

  ngOnInit(): void {
    this.buildForm()
  }

}
