import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightComponent } from 'fui';

@Component({
  selector: 'app-highlight-view',
  standalone: true,
  templateUrl: './highlight-view.component.html',
  styleUrl: './highlight-view.component.scss',
  imports: [HighlightComponent, FormsModule],
})
export class HighlightViewComponent {
  highlightText = '';
  isCaseSensitive = false;
  isHighlightAll = false;
  searchSeparatedWord = false;

  onIsHighlightAllChange() {
    if (!this.isHighlightAll) {
      this.searchSeparatedWord = false;
    }
  }
}
