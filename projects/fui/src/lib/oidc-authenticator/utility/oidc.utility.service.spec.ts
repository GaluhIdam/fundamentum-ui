import { TestBed } from '@angular/core/testing';

import { OidcUtilityService } from './oidc.utility.service';

describe('OidcUtilityService', () => {
  let service: OidcUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OidcUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
