import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMealComponent } from './show-meal.component';

describe('ShowMealComponent', () => {
  let component: ShowMealComponent;
  let fixture: ComponentFixture<ShowMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
