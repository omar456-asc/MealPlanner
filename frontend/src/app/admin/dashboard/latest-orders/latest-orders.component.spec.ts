import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestOrdersComponent } from './latest-orders.component';

describe('LatestOrdersComponent', () => {
  let component: LatestOrdersComponent;
  let fixture: ComponentFixture<LatestOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
