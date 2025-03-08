import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAppointmentComponent } from './l-appointment.component';

describe('LAppointmentComponent', () => {
  let component: LAppointmentComponent;
  let fixture: ComponentFixture<LAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
