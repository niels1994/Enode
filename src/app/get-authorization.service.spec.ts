import { TestBed } from '@angular/core/testing';

import { GetAuthorizationService } from './get-authorization.service';

describe('GetAuthorizationService', () => {
  let service: GetAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
