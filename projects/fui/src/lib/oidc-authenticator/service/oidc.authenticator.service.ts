import { Injectable } from '@angular/core';
import { OidcUtilityService } from '../utility/oidc.utility.service';
import {
  catchError,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

/** OpenId Connect Service
 * @description OidcAuthenticatorService is an Angular service designed to facilitate authentication and authorization using OpenID Connect (OIDC).
 * It provides methods for user login, logout, and authentication status checks, along with handling OIDC callback and user information retrieval.
 * This service manages tokens (access, ID, and refresh tokens) storage and revocation, supports various storage mechanisms (local, session, or cookie),
 * and interacts with OIDC endpoints for authentication and authorization processes.
 */
@Injectable({
  providedIn: 'root',
})
export class OidcAuthenticatorService extends OidcUtilityService {
  private authWindow: Window | null = null;
  private width: number = 500;
  private height: number = 500;
  private left: number = window.screen.width / 2 - this.width / 2;
  private top: number = window.screen.height / 2 - this.height / 2;

  /** Login Method */
  async loginAuth(config: ConfigDTO): Promise<void> {
    const codeVerifier = this.generateCodeVerifier();
    this.setLocalStorage(this.codeVerifierKey, codeVerifier);
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);
    const url = `${config.authorization_endpoint}?client_id=${
      config.client_id
    }&redirect_uri=${encodeURIComponent(
      config.redirect_uri
    )}&response_type=code&scope=${encodeURIComponent(
      config.scope
    )}&nonce=${this.generateNonce()}&code_challenge=${codeChallenge}&code_challenge_method=S256&access_type=offline`;
    window.location.href = url;
  }

  /** Login With Popup */
  async loginWithPopup(config: ConfigDTO): Promise<void> {
    const codeVerifier = this.generateCodeVerifier();
    this.setLocalStorage(this.codeVerifierKey, codeVerifier);
    const codeChallenge = await this.generateCodeChallenge(codeVerifier);
    this.authWindow = window.open(
      `${config.authorization_endpoint}?client_id=${
        config.client_id
      }&redirect_uri=${encodeURIComponent(
        config.redirect_uri
      )}&response_type=code&scope=${encodeURIComponent(
        config.scope
      )}&nonce=${this.generateNonce()}&code_challenge=${codeChallenge}&code_challenge_method=S256&access_type=offline`,
      '_blank',
      `width=${this.width},height=${this.height},left=${this.left},top=${this.top}`
    );
  }

  /** Callback Handler */
  callBackAuth(config: ConfigDTO): void {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      this._exchangeCodeForTokens(code, config)
        .pipe(
          tap((result) => {
            if (result && 'access_token' in result && result.access_token) {
              if (config.storageUsage === 'local') {
                this.setLocalStorage('access_token', result.access_token);
              }
              if (config.storageUsage === 'session') {
                this.setLocalStorage('access_token', result.access_token);
              }
              if (config.storageUsage === 'cookie') {
                this.setCookie('access_token', result.access_token, 7);
              }
            }
            if (result && 'id_token' in result && result.id_token) {
              if (config.storageUsage === 'local') {
                this.setLocalStorage('id_token', result.id_token);
              }
              if (config.storageUsage === 'session') {
                this.setLocalStorage('id_token', result.id_token);
              }
              if (config.storageUsage === 'cookie') {
                this.setCookie('id_token', result.id_token, 7);
              }
            }
            if (result && 'refresh_token' in result && result.refresh_token) {
              if (config.storageUsage === 'local') {
                this.setLocalStorage('refresh_token', result.refresh_token);
              }
              if (config.storageUsage === 'session') {
                this.setLocalStorage('refresh_token', result.refresh_token);
              }
              if (config.storageUsage === 'cookie') {
                this.setCookie('refresh_token', result.refresh_token, 7);
              }
            }
            this.deleteCookie(this.codeVerifierKey);
            this.deleteLocalStorage(this.codeVerifierKey);
            this.deleteSessionStorage(this.codeVerifierKey);
            if (window.opener) {
              window.close();
              if (window.opener.location) {
                window.opener.location.reload();
              }
            }
            window.location.reload();
            history.replaceState(null, '', window.location.pathname);
          }),
          catchError((error) => {
            console.error('Error during token exchange:', error);
            return of(null);
          })
        )
        .subscribe();
    }
  }

  /** Checking Authentication */
  checkAuth(config: ConfigDTO): Observable<boolean> {
    if (config.storageUsage === 'session') {
      const access_token = this.getLocalStorage('access_token');
      const id_token = this.getLocalStorage('id_token');
      const refresh_token = this.getLocalStorage('refresh_token');
      if (access_token && id_token && refresh_token) {
        this.setSessionStorage('access_token', access_token);
        this.setSessionStorage('id_token', id_token);
        this.setSessionStorage('refresh_token', refresh_token);
      }
      this.deleteAllLocalStorage();
    }
    const localAccessToken = this.getLocalStorage('access_token');
    const localIdToken = this.getLocalStorage('id_token');

    const sessionAccessToken = this.getSessionStorage('access_token');
    const sessionIdToken = this.getSessionStorage('id_token');

    const cookieAccessToken = this.getCookie('access_token');
    const cookieIdToken = this.getCookie('id_token');

    const hasLocalTokens = localAccessToken && localIdToken;
    const hasSessionTokens = sessionAccessToken && sessionIdToken;
    const hasCookieTokens = cookieAccessToken && cookieIdToken;

    if (hasLocalTokens || hasSessionTokens || hasCookieTokens) {
      return this.getUserInfo(config).pipe(
        tap((res) => {
          if (res === null) {
            this.deleteAllCookies();
            this.deleteAllLocalStorage();
            this.deleteAllSessionStorage();
          }
        }),
        map((res) => !!res),
        catchError(() => {
          return of(false);
        })
      );
    } else {
      return of(false);
    }
  }

  /** Logout Method */
  logoutAuth(config: ConfigDTO): Observable<unknown> {
    let token: string | null = null;
    let refresh_token: string | null = null;
    if (config.storageUsage === 'local') {
      token = this.getLocalStorage('access_token');
      refresh_token = this.getLocalStorage('refresh_token');
    } else if (config.storageUsage === 'session') {
      token = this.getSessionStorage('access_token');
      refresh_token = this.getSessionStorage('refresh_token');
    } else if (config.storageUsage === 'cookie') {
      token = this.getCookie('access_token');
      refresh_token = this.getCookie('refresh_token');
    }
    if (!token) {
      throw new Error('No access token found');
    }
    return this._http
      .get<WellKnownEndPointDTO>(config.authWellknownEndpointUrl)
      .pipe(
        switchMap((res) => {
          const revocationRequests: Observable<any>[] = [];
          if (refresh_token && res.end_session_endpoint) {
            const endSessionBody = new URLSearchParams();
            endSessionBody.set('client_id', config.client_id);
            endSessionBody.set('refresh_token', refresh_token);

            const endSessionRequest = this._http.post(
              res.end_session_endpoint,
              endSessionBody.toString(),
              {
                headers: new HttpHeaders({
                  'Content-Type': 'application/x-www-form-urlencoded',
                }),
              }
            );
            revocationRequests.push(endSessionRequest);
          }
          if (token) {
            const revokeTokenBody = new URLSearchParams();
            revokeTokenBody.set('token', token);
            revokeTokenBody.set('client_id', config.client_id);

            const revokeTokenRequest = this._http.post(
              res.revocation_endpoint,
              revokeTokenBody.toString(),
              {
                headers: new HttpHeaders({
                  'Content-Type': 'application/x-www-form-urlencoded',
                }),
              }
            );
            revocationRequests.push(revokeTokenRequest);
          }
          return forkJoin(revocationRequests).pipe(
            tap(() => {
              this.deleteAllCookies();
              this.deleteAllLocalStorage();
              this.deleteAllSessionStorage();
              window.location.reload();
            }),
            catchError((error) => {
              console.error('Error during logout:', error);
              return of(null);
            })
          );
        })
      );
  }

  /** Get User Info Method */
  getUserInfo(config: ConfigDTO): Observable<unknown> {
    let token: string | null = null;
    if (config.storageUsage === 'local') {
      token = localStorage.getItem('access_token');
    }
    if (config.storageUsage === 'cookie') {
      token = this.getCookie('access_token');
    }
    if (config.storageUsage === 'session') {
      token = this.getSessionStorage('access_token');
    }
    if (!token) {
      return of(null);
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this._http
      .get<WellKnownEndPointDTO>(config.authWellknownEndpointUrl)
      .pipe(
        switchMap((res) =>
          this._http.get<unknown>(res.userinfo_endpoint, { headers })
        ),
        catchError(() => {
          return of(null);
        })
      );
  }
}

/** Data Transfer Object for Config Authentication */
export interface ConfigDTO {
  authorization_endpoint: string;
  client_id: string;
  client_secret?: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
  authWellknownEndpointUrl: string;
  storageUsage: 'local' | 'session' | 'cookie';
}

/** Data Transfer Object for WellKnownEndPoint */
export interface WellKnownEndPointDTO {
  issuer: string;
  authorization_endpoint: string;
  device_authorization_endpoint: string;
  token_endpoint: string;
  userinfo_endpoint: string;
  end_session_endpoint?: string;
  revocation_endpoint: string;
  jwks_uri: string;
  response_types_supported: string[];
  subject_types_supported: string[];
  id_token_signing_alg_values_supported: string[];
  scopes_supported: string[];
  token_endpoint_auth_methods_supported: string[];
  claims_supported: string[];
  code_challenge_methods_supported: string[];
  grant_types_supported: string[];
}
