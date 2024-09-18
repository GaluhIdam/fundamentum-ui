import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OidcAuthenticatorService } from 'fui';
import { google } from './core/config/config';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterOutlet, LayoutComponent],
  providers: [OidcAuthenticatorService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fui-demo';

  constructor(
    private renderer: Renderer2,
    private readonly _authService: OidcAuthenticatorService
  ) {
    /** Callback Handle */
    this._authService.callBackAuth(google);
  }
}
