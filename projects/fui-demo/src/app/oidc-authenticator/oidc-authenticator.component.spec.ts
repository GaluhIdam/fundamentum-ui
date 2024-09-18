import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcAuthenticatorComponent } from './oidc-authenticator.component';

describe('OidcAuthenticatorComponent', () => {
  let component: OidcAuthenticatorComponent;
  let fixture: ComponentFixture<OidcAuthenticatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OidcAuthenticatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OidcAuthenticatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
