import { inject, Injectable } from '@angular/core';
import {
  ConfigDTO,
  WellKnownEndPointDTO,
} from '../service/oidc.authenticator.service';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

  /** Proof of Key Code Exchange Process
   * @description Run this process after login completed for getting token
   * and make sure there codeVerifier in localStorage, sessionStorage, or cookie.
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

  /** Nonce Generator */
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

  /** Proof of Key Code Exchange Generator */
  generateCodeVerifier(): string {
    const array = new Uint32Array(56 / 2);
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ('0' + dec.toString(16)).slice(-2)).join(
      ''
    );
  }

  /** Code Challenge Generator */
  async generateCodeChallenge(verifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  /** Set Local Storage */
  setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /** Get Local Storage */
  getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  /** Delete Local Storage */
  deleteLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  /** Delete All Local Storage */
  deleteAllLocalStorage(): void {
    localStorage.clear();
  }

  /** Set Session Storage */
  setSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  /** Get Session Storage */
  getSessionStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  /** Delete Session Storage */
  deleteSessionStorage(key: string): void {
    sessionStorage.removeItem(key);
  }

  /** Delete All Session Storage */
  deleteAllSessionStorage(): void {
    sessionStorage.clear();
  }

  /** Set Cookie */
  setCookie(name: string, value: string, days: number): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  /** Get Cookie */
  getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  /** Delete Cookie */
  deleteCookie(name: string): void {
    document.cookie = name + '=; Max-Age=-99999999;';
  }

  /** Delete All Cookie */
  deleteAllCookies(): void {
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

/** Data Transfer Object for Token Response */
export interface TokenResponseDTO {
  access_token: string;
  id_token: string;
  refresh_token?: string;
  expires_in: number;
  scope: string;
  token_type: string;
}
