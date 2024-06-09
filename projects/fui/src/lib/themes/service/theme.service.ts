import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>(
    'light'
  );
  currentTheme$ = this.currentTheme.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyTheme();
  }

  changeTheme(theme: string) {
    const themeLink = this.renderer.selectRootElement('#theme-css', true);
    if (theme === 'dark') {
      this.renderer.setAttribute(themeLink, 'href', 'dark-theme.scss');
    } else {
      this.renderer.setAttribute(themeLink, 'href', 'light-theme.scss');
    }
    this.currentTheme.next(theme);
    localStorage.setItem('theme', theme);
  }

  setTheme(theme: string): void {
    if (this.currentTheme.value !== theme) {
      this.renderer.removeClass(document.body, this.currentTheme.value);
      this.renderer.addClass(document.body, theme);
      this.currentTheme.next(theme);
      localStorage.setItem('theme', theme);
    }
  }

  getTheme(): string | null {
    return localStorage.getItem('theme');
  }

  applyTheme(): void {
    const theme = this.getTheme();
    if (!theme) {
      this.setTheme('dark');
    } else {
      this.setTheme(theme);
    }
  }
}
