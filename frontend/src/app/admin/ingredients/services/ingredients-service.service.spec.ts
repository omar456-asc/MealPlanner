import { TestBed } from '@angular/core/testing';

import { IngredientsServiceService } from './ingredients-service.service';

describe('IngredientsServiceService', () => {
  let service: IngredientsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
