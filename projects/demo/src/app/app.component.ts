import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OidcAuthenticatorService } from 'fui';
import { google } from './core/config/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly _authService = inject(OidcAuthenticatorService);
  title = 'demo';
  constructor() {
    /** Callback Handle */
    this._authService.callBackAuth(google);
  }
}
