import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsManagementComponent } from './payments-management.component';

describe('PaymentsManagementComponent', () => {
  let component: PaymentsManagementComponent;
  let fixture: ComponentFixture<PaymentsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
