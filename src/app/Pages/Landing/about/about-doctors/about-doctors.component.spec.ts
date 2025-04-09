import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDoctorsComponent } from './about-doctors.component';

describe('AboutDoctorsComponent', () => {
  let component: AboutDoctorsComponent;
  let fixture: ComponentFixture<AboutDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
