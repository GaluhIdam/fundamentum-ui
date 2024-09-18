import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
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
import { isPlatformBrowser } from '@angular/common';

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
  private left?: number;
  private top?: number;

  constructor(@Inject(PLATFORM_ID) private platformIdx: any) {
    super(platformIdx);
    if (isPlatformBrowser(this.platformIdx)) {
      // Only runs in the browser
      this.left = window.screen.width / 2 - this.width / 2;
      this.top = window.screen.height / 2 - this.height / 2;
    }
  }

  /**
   * Url Generator
   *
   * @private
   * @async
   * @param {ConfigDTO} config
   * @param {string} codeChallenge
   * @returns {Promise<string>}
   */
  private async generateAuthUrl(
    config: ConfigDTO,
    codeChallenge: string
  ): Promise<string> {
    return `${config.authorization_endpoint}?client_id=${
      config.client_id
    }&redirect_uri=${encodeURIComponent(
      config.redirect_uri
    )}&response_type=code&scope=${encodeURIComponent(
      config.scope
    )}&nonce=${this.generateNonce()}&code_challenge=${codeChallenge}&code_challenge_method=S256&access_type=offline`;
  }

  /**
   * Login with Page
   *
   * @async
   * @param {ConfigDTO} config
   * @returns {Promise<void>}
   */
  async loginWithPage(config: ConfigDTO): Promise<void> {
    if (isPlatformBrowser(this.platformIdx)) {
      const codeVerifier = this.generateCodeVerifier();
      this.setLocalStorage(this.codeVerifierKey, codeVerifier);
      const codeChallenge = await this.generateCodeChallenge(codeVerifier);
      window.location.href = await this.generateAuthUrl(config, codeChallenge);
    }
  }

  /**
   * Login with Popup
   *
   * @async
   * @param {ConfigDTO} config
   * @returns {Promise<void>}
   */
  async loginWithPopup(config: ConfigDTO): Promise<void> {
    if (isPlatformBrowser(this.platformIdx)) {
      const codeVerifier = this.generateCodeVerifier();
      this.setLocalStorage(this.codeVerifierKey, codeVerifier);
      const codeChallenge = await this.generateCodeChallenge(codeVerifier);
      const authUrl = await this.generateAuthUrl(config, codeChallenge);
      this.authWindow = window.open(
        authUrl,
        '_blank',
        `width=${this.width},height=${this.height},left=${this.left},top=${this.top}`
      );
    }
  }

  /**
   * Callback Handler
   *
   * @param {ConfigDTO} config
   */
  callBackAuth(config: ConfigDTO): void {
    if (isPlatformBrowser(this.platformIdx)) {
      const code = new URL(window.location.href).searchParams.get('code');
      if (!code) return;
      this._exchangeCodeForTokens(code, config)
        .pipe(
          tap((result) => {
            this.storeTokens(result, config);
            this.clearVerifierData();
            if (window.opener) {
              window.close();
              if (window.opener.location) {
                window.opener.location.reload();
              }
            } else {
              window.location.reload();
            }
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

  /**
   * Checking Authentication
   *
   * @param {ConfigDTO} config
   * @returns {Observable<boolean>}
   */
  checkAuth(config: ConfigDTO): Observable<boolean> {
    if (isPlatformBrowser(this.platformIdx)) {
      const tokens = this.retrieveTokens(config);
      if (tokens) {
        return this.getUserInfo(config).pipe(
          tap((res) => {
            if (!res) {
              localStorage.removeItem('access_token');
              localStorage.removeItem('id_token');
              localStorage.removeItem('refresh_token');
            }
          }),
          map((res) => !!res),
          catchError(() => of(false))
        );
      } else {
        return of(false);
      }
    } else {
      return of(false);
    }
  }

  /**
   * Logout
   *
   * @param {ConfigDTO} config
   * @returns {Observable<unknown>}
   */
  logoutAuth(config: ConfigDTO): Observable<unknown> {
    if (isPlatformBrowser(this.platformIdx)) {
      const tokens = this.retrieveTokens(config);
      if (!tokens.accessToken) throw new Error('No access token found');
      return this._http
        .get<WellKnownEndPointDTO>(config.authWellknownEndpointUrl)
        .pipe(
          switchMap((res) => {
            const revocationRequests = this.generateRevocationRequests(
              res,
              config,
              tokens
            );
            return forkJoin(revocationRequests).pipe(
              tap(() => {
                this.clearAllStorage();
                window.location.reload();
              }),
              catchError((error) => {
                console.error('Error during logout:', error);
                return of(null);
              })
            );
          })
        );
    } else {
      return of(null);
    }
  }

  /**
   * Get User Info
   *
   * @param {ConfigDTO} config
   * @returns {Observable<any>}
   */
  getUserInfo(config: ConfigDTO): Observable<any> {
    const token = this.retrieveToken(config, 'access_token');
    if (!token) return of(null);

    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });

    return this._http
      .get<WellKnownEndPointDTO>(config.authWellknownEndpointUrl)
      .pipe(
        switchMap((res) =>
          this._http.get<any>(res.userinfo_endpoint, { headers })
        ),
        catchError(() => of(null))
      );
  }
}

/**
 * Data Transfer Object for Config Authentication
 *
 * @export
 * @interface ConfigDTO
 * @typedef {ConfigDTO}
 */
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

/**
 * Data Transfer Object for WellKnownEndPoint
 *
 * @export
 * @interface WellKnownEndPointDTO
 * @typedef {WellKnownEndPointDTO}
 */
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
