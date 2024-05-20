import { TestBed } from '@angular/core/testing';

import { OidcAuthenticatorService } from './oidc.authenticator.service';

describe('OidcAuthenticatorService', () => {
  let service: OidcAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OidcAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
