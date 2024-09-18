import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ConfigDTO,
  WellKnownEndPointDTO,
} from '../service/oidc.authenticator.service';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

/** OpenId Connect Utility
 * @description OidcUtilityService is an Angular service designed to provide utility functions and methods for OpenID Connect (OIDC) authentication and authorization processes.
 * It includes functionalities for exchanging authorization code for tokens, generating nonces, code verifiers, and code challenges for PKCE (Proof Key for Code Exchange),
 * as well as managing tokens storage (localStorage, sessionStorage, and cookies) and handling HTTP requests related to OIDC endpoints.
 * This service abstracts common OIDC-related tasks, such as token management and storage, cookie handling, and cryptographic operations, to simplify OIDC integration in Angular applications.
 */
@Injectable({
  providedIn: 'root',
})
export class OidcUtilityService {
  protected readonly _http = inject(HttpClient);
  protected codeVerifierKey: string = 'pkce_code_verifier';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  /**
   * Proof of Key Code Exchange Process
   * @description Run this process after login completed for getting token
   * and make sure there codeVerifier in localStorage, sessionStorage, or cookie.
   *
   * @protected
   * @param {string} code
   * @param {ConfigDTO} config
   * @returns {Observable<TokenResponseDTO | WellKnownEndPointDTO | null>}
   */
  protected _exchangeCodeForTokens(
    code: string,
    config: ConfigDTO
  ): Observable<TokenResponseDTO | WellKnownEndPointDTO | null> {
    const codeVerifier = this.getLocalStorage(this.codeVerifierKey);
    if (!codeVerifier) {
      console.error('Code verifier not found.');
      return of(null);
    }

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', config.redirect_uri)
      .set('client_secret', config.client_secret ?? '')
      .set('client_id', config.client_id)
      .set('code_verifier', codeVerifier);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this._http
      .get<WellKnownEndPointDTO>(config.authWellknownEndpointUrl)
      .pipe(
        switchMap((res) => {
          return this._http.post<TokenResponseDTO>(
            res.token_endpoint,
            body.toString(),
            {
              headers,
            }
          );
        }),
        catchError(() => {
          return of(null);
        })
      );
  }

  /**
   * Nonce Generator
   *
   * @param {number} [length=16]
   * @returns {string}
   */
  generateNonce(length: number = 16): string {
    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let nonce = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      nonce += charset[randomIndex];
    }
    return nonce;
  }

  /**
   * Proof of Key Code Exchange Generator
   *
   * @returns {string}
   */
  generateCodeVerifier(): string {
    if (isPlatformBrowser(this.platformId)) {
      const array = new Uint32Array(56 / 2);
      window.crypto.getRandomValues(array);
      return Array.from(array, (dec) =>
        ('0' + dec.toString(16)).slice(-2)
      ).join('');
    } else {
      return '';
    }
  }

  /**
   * Code Challenge Generator
   *
   * @async
   * @param {string} verifier
   * @returns {Promise<string>}
   */
  async generateCodeChallenge(verifier: string): Promise<string> {
    if (isPlatformBrowser(this.platformId)) {
      const encoder = new TextEncoder();
      const data = encoder.encode(verifier);
      const digest = await window.crypto.subtle.digest('SHA-256', data);
      return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    } else {
      return '';
    }
  }

  /**
   * Set Local Storage
   *
   * @param {string} key
   * @param {string} value
   */
  setLocalStorage(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, value);
    }
  }

  /**
   * Get Local Storage
   *
   * @param {string} key
   * @returns {(string | null)}
   */
  getLocalStorage(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  }

  /**
   * Delete Local Storage
   *
   * @param {string} key
   */
  deleteLocalStorage(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  /** Delete All Local Storage */
  deleteAllLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }

  /**
   * Set Session Storage
   *
   * @param {string} key
   * @param {string} value
   */
  setSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  /**
   * Get Session Storage
   *
   * @param {string} key
   * @returns {(string | null)}
   */
  getSessionStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  /**
   * Delete Session Storage
   *
   * @param {string} key
   */
  deleteSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  /**
   * Delete All Session Storage
   */
  deleteAllSessionStorage(): void {
    sessionStorage.clear();
  }

  /**
   * Set Cookie
   *
   * @param {string} name
   * @param {string} value
   * @param {number} days
   */
  setCookie(name: string, value: string, days: number): void {
    if (isPlatformBrowser(this.platformId)) {
      let expires = '';
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
      }
      document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
  }

  /**
   * Get Cookie
   *
   * @param {string} name
   * @returns {(string | null)}
   */
  getCookie(name: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  /**
   * Delete Cookie
   *
   * @param {string} name
   */
  deleteCookie(name: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.cookie = name + '=; Max-Age=-99999999;';
    }
  }

  /**
   * Delete All Cookie
   */
  deleteAllCookies(): void {
    if (isPlatformBrowser(this.platformId)) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie =
          name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    }
  }

  /**
   * Clear Verifier Data
   *
   * @protected
   */
  protected clearVerifierData(): void {
    this.deleteLocalStorage(this.codeVerifierKey);
  }

  /**
   * Store Token for access token, id_token, refresh_token
   *
   * @protected
   * @param {*} result
   * @param {ConfigDTO} config
   */
  protected storeTokens(result: any, config: ConfigDTO): void {
    if (!result) return;
    this.storeToken(config, 'access_token', result.access_token);
    this.storeToken(config, 'id_token', result.id_token);
    this.storeToken(config, 'refresh_token', result.refresh_token);
  }

  /**
   * Helper Store Token for access token, id_token, refresh_token
   *
   * @private
   * @param {ConfigDTO} config
   * @param {string} key
   * @param {string} value
   */
  private storeToken(config: ConfigDTO, key: string, value: string): void {
    if (value) {
      if (config.storageUsage === 'local') {
        this.setLocalStorage(key, value);
      } else if (config.storageUsage === 'session') {
        this.setSessionStorage(key, value);
      } else if (config.storageUsage === 'cookie') {
        this.setCookie(key, value, 7);
      }
    }
  }

  /**
   * Retrieve Tokens for access token and refresh token
   *
   * @protected
   * @param {ConfigDTO} config
   * @returns {{
   *     accessToken: string | null;
   *     refreshToken: string | null;
   *   }}
   */
  protected retrieveTokens(config: ConfigDTO): {
    accessToken: string | null;
    refreshToken: string | null;
  } {
    const accessToken = this.retrieveToken(config, 'access_token');
    const refreshToken = this.retrieveToken(config, 'refresh_token');
    return { accessToken, refreshToken };
  }

  /**
   * Helper Retrieve Tokens for access token and refresh token
   *
   * @private
   * @param {ConfigDTO} config
   * @param {string} key
   * @returns {(string | null)}
   */
  protected retrieveToken(config: ConfigDTO, key: string): string | null {
    if (config.storageUsage === 'local') {
      return this.getLocalStorage(key);
    } else if (config.storageUsage === 'session') {
      return this.getSessionStorage(key);
    } else if (config.storageUsage === 'cookie') {
      return this.getCookie(key);
    }
    return null;
  }

  /**
   * Clear All Storage
   *
   * @protected
   */
  protected clearAllStorage(): void {
    this.deleteAllCookies();
    this.deleteAllLocalStorage();
    this.deleteAllSessionStorage();
  }

  /**
   * Generator Revocation Requests
   *
   * @protected
   * @param {WellKnownEndPointDTO} res
   * @param {ConfigDTO} config
   * @param {({ accessToken: string | null; refreshToken: string | null })} tokens
   * @returns {Observable<any>[]}
   */
  protected generateRevocationRequests(
    res: WellKnownEndPointDTO,
    config: ConfigDTO,
    tokens: { accessToken: string | null; refreshToken: string | null }
  ): Observable<any>[] {
    const requests: Observable<any>[] = [];

    if (tokens.refreshToken && res.end_session_endpoint) {
      const endSessionBody = new URLSearchParams();
      endSessionBody.set('client_id', config.client_id);
      endSessionBody.set('refresh_token', tokens.refreshToken);
      requests.push(
        this._http.post(res.end_session_endpoint, endSessionBody.toString(), {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        })
      );
    }

    if (tokens.accessToken) {
      const revokeTokenBody = new URLSearchParams();
      revokeTokenBody.set('token', tokens.accessToken);
      revokeTokenBody.set('client_id', config.client_id);
      requests.push(
        this._http.post(res.revocation_endpoint, revokeTokenBody.toString(), {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        })
      );
    }

    return requests;
  }
}

/** Data Transfer Object for Token Response */
export interface TokenResponseDTO {
  access_token: string;
  id_token: string;
  refresh_token?: string;
  expires_in: number;
  scope: string;
  token_type: string;
}
