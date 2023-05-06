import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpecialComponent } from './our-special.component';

describe('OurSpecialComponent', () => {
  let component: OurSpecialComponent;
  let fixture: ComponentFixture<OurSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
