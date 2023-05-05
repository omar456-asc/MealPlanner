import { TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:frontend/src/app/auth/services/sign-up/sign-up.service.spec.ts
import { SignUpService } from './sign-up.service';

describe('SignUpService', () => {
  let service: SignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpService);
========
import { LogInService } from './log-in.service';

describe('LogInService', () => {
  let service: LogInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInService);
>>>>>>>> fe24046a3a0d5fc9bd06184afdf1bdaf61c62bd7:frontend/src/app/auth/services/log-in/log-in.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
