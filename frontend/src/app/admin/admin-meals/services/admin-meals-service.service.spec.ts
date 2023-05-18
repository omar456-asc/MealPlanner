import { TestBed } from '@angular/core/testing';

import { AdminMealsServiceService } from './admin-meals-service.service';

describe('AdminMealsServiceService', () => {
  let service: AdminMealsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMealsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
