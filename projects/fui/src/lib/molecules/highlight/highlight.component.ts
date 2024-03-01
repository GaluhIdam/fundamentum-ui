import { Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { Color, Size } from '../../types';

@Component({
  selector: 'fui-highlight',
  standalone: true,
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss',
  imports: [TextComponent],
})
export class HighlightComponent {
  @Input() text: string = '';
  @Input() textHighlight: string = '';
  @Input() isHighlightAll: boolean = false;
  @Input() isCaseSensitive: boolean = false;
  @Input() searchSeparatedWord: boolean = false;
  @Input() size!: Size;
  @Input() color!: Color;
  separatedWordArray: string[] = [];

  get highlightedText(): string {
    if (!this.text || !this.textHighlight) {
      return this.text;
    }

    let flags = '';
    if (this.isHighlightAll) {
      flags += 'g';
    }

    if (!this.isCaseSensitive) {
      flags += 'i';
    }

    if (this.searchSeparatedWord) {
      this.separatedWordArray = this.textHighlight.split(' ').filter(Boolean);
    }

    const parts: string[] = [];
    if (this.searchSeparatedWord && this.separatedWordArray.length) {
      const parts: string[] = [];
      const regexString = '\\b(' + this.separatedWordArray.join('|') + ')\\b';
      const regex = new RegExp(regexString, flags);

      this.text.split(regex).forEach((word) => {
        if (regex.test(word)) {
          parts.push(`<span class="highlight">${word}</span>`);
        } else {
          parts.push(word);
        }
      });

      return parts.join('');
    } else {
      const regex = new RegExp(this.textHighlight, flags);
      return this.text.replace(
        regex,
        (match) => `<span class="highlight">${match}</span>`
      );
    }
  }
}
