import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedProductsComponent } from './recently-added-products.component';

describe('RecentlyAddedProductsComponent', () => {
  let component: RecentlyAddedProductsComponent;
  let fixture: ComponentFixture<RecentlyAddedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyAddedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyAddedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
