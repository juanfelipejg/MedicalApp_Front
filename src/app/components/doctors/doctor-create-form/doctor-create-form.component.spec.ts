import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCreateFormComponent } from './doctor-create-form.component';

describe('DoctorCreateFormComponent', () => {
  let component: DoctorCreateFormComponent;
  let fixture: ComponentFixture<DoctorCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
