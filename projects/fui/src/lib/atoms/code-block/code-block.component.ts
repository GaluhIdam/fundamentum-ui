import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { IconsComponent } from '../icons/icons.component';
import { TooltipComponent } from '../../templates/tooltip/tooltip.component';

@Component({
  selector: 'fui-code-block',
  standalone: true,
  templateUrl: './code-block.component.html',
  styleUrl: './code-block.component.scss',
  imports: [
    CommonModule,
    Highlight,
    HighlightLineNumbers,
    IconsComponent,
    TooltipComponent,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CodeBlockComponent {
  @Input() code: string = '';
  codes: string = `<html><head></head><body><h1>Hello, World!</h1></body></html>`;
  @Input() language: string = '';
  @Input() lineNumbers: boolean = false;
  @Input() allowFullscreen: boolean = true;
  @Input() allowCopy: boolean = true;

  fullScreen: boolean = false;
  isCopied: boolean = false;

  constructor(private renderer: Renderer2) {}

  fullScreenAct() {
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      this.renderer.addClass(document.body, 'body-overflow-hidden');
    } else {
      this.renderer.removeClass(document.body, 'body-overflow-hidden');
    }
  }

  copyAct() {
    this.isCopied = true;
    this.copyToClipboard(this.code);
  }

  async copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        this.isCopied = false;
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  }
}
