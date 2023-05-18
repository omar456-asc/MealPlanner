import { TestBed } from '@angular/core/testing';

import { AdminOrdersServiceService } from './admin-orders-service.service';

describe('AdminOrdersServiceService', () => {
  let service: AdminOrdersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOrdersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
