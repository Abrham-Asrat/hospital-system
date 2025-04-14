import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfutureComponent } from './aboutfuture.component';

describe('AboutfutureComponent', () => {
  let component: AboutfutureComponent;
  let fixture: ComponentFixture<AboutfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutfutureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
