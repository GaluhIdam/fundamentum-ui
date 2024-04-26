import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkTheme: boolean = false;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark' : 'light';

    // Remove existing theme class
    this.renderer.removeClass(
      document.body,
      this.isDarkTheme ? 'light-theme' : 'dark-theme'
    );
    // Add new theme class
    this.renderer.addClass(document.body, theme + '-theme');
  }
}
