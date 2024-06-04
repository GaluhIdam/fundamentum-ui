import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: string = 'light';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  changeTheme(theme: string) {
    const themeLink = this.renderer.selectRootElement('#theme-css', true);
    if (theme === 'dark') {
      this.renderer.setAttribute(themeLink, 'href', 'dark-theme.scss');
    } else {
      this.renderer.setAttribute(themeLink, 'href', 'light-theme.scss');
    }
  }

  setTheme(theme: string): void {
    if (this.currentTheme !== theme) {
      this.renderer.removeClass(document.body, this.currentTheme);
      this.renderer.addClass(document.body, theme);
      this.currentTheme = theme;
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
