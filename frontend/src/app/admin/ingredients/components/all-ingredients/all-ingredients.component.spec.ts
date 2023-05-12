import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIngredientsComponent } from './all-ingredients.component';

describe('AllIngredientsComponent', () => {
  let component: AllIngredientsComponent;
  let fixture: ComponentFixture<AllIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
