import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFutureComponent } from './about-future.component';

describe('AboutFutureComponent', () => {
  let component: AboutFutureComponent;
  let fixture: ComponentFixture<AboutFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutFutureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
