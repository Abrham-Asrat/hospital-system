import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWorksComponent } from './about-works.component';

describe('AboutWorksComponent', () => {
  let component: AboutWorksComponent;
  let fixture: ComponentFixture<AboutWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
