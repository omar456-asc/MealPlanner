import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMembersComponent } from './latest-members.component';

describe('LatestMembersComponent', () => {
  let component: LatestMembersComponent;
  let fixture: ComponentFixture<LatestMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
