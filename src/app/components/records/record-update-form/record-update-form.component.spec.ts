import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUpdateFormComponent } from './record-update-form.component';

describe('RecordUpdateFormComponent', () => {
  let component: RecordUpdateFormComponent;
  let fixture: ComponentFixture<RecordUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
