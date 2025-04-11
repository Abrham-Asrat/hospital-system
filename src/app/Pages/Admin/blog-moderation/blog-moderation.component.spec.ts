import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogModerationComponent } from './blog-moderation.component';

describe('BlogModerationComponent', () => {
  let component: BlogModerationComponent;
  let fixture: ComponentFixture<BlogModerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogModerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
