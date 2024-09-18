import { Component, inject } from '@angular/core';
import { ButtonIconComponent, OidcAuthenticatorService } from 'fui';
import { google } from '../../core/config/config';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-secure-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ButtonIconComponent],
  providers: [OidcAuthenticatorService],
  templateUrl: './secure-page.component.html',
  styleUrl: './secure-page.component.scss',
})
export class SecurePageComponent {
  data: any;
  constructor(private readonly _authService: OidcAuthenticatorService) {}

  ngOnInit(): void {
    this._authService
      .getUserInfo(google)
      .pipe(map((res) => (this.data = res)))
      .subscribe();
  }

  /** Logout Method */
  logout(): void {
    this._authService.logoutAuth(google).subscribe();
  }
}
