import { Component } from '@angular/core';
import { ButtonIconComponent, OidcAuthenticatorService } from 'fui';
import { google } from '../core/config/config';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-oidc-authenticator',
  standalone: true,
  imports: [ButtonIconComponent],
  templateUrl: './oidc-authenticator.component.html',
  styleUrl: './oidc-authenticator.component.scss',
})
export class OidcAuthenticatorComponent {
  constructor(
    private readonly _authService: OidcAuthenticatorService,
    private readonly _router: Router
  ) {
    this._authService
      .checkAuth(google)
      .pipe(
        tap((isAuthenticated) => {
          if (isAuthenticated) {
            this._router.navigate(['oidc-authenticator/secure-page']);
          }
        })
      )
      .subscribe();
  }

  /** Login Method */
  login(): void {
    this._authService.loginWithPopup(google);
  }
}