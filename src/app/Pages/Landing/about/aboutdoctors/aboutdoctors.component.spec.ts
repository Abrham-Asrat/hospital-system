import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdoctorsComponent } from './aboutdoctors.component';

describe('AboutdoctorsComponent', () => {
  let component: AboutdoctorsComponent;
  let fixture: ComponentFixture<AboutdoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdoctorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutdoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
