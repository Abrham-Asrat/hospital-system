import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LFAQComponent } from './l-faq.component';

describe('LFAQComponent', () => {
  let component: LFAQComponent;
  let fixture: ComponentFixture<LFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LFAQComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});