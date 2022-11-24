import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCreateFormComponent } from './patient-create-form.component';

describe('PatientCreateFormComponent', () => {
  let component: PatientCreateFormComponent;
  let fixture: ComponentFixture<PatientCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
