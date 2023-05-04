import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogComponent } from './latest-blog.component';

describe('LatestBlogComponent', () => {
  let component: LatestBlogComponent;
  let fixture: ComponentFixture<LatestBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
