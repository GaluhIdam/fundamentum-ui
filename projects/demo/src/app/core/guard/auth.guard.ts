import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { OidcAuthenticatorService } from 'fui';
import { google } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private readonly router: Router,
    private readonly authService: OidcAuthenticatorService
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkAuth(google).pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['oidc-authenticator/authenticator']);
        }
      }),
      map((isAuthenticated) => isAuthenticated)
    );
  }
}
