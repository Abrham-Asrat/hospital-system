import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutworksComponent } from './aboutworks.component';

describe('AboutworksComponent', () => {
  let component: AboutworksComponent;
  let fixture: ComponentFixture<AboutworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
