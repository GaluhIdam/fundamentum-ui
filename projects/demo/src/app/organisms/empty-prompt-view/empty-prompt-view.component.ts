import { Component } from '@angular/core';
import { EmptyPromptComponent } from 'fui';

@Component({
  selector: 'app-empty-prompt-view',
  standalone: true,
  templateUrl: './empty-prompt-view.component.html',
  styleUrl: './empty-prompt-view.component.scss',
  imports: [EmptyPromptComponent],
})
export class EmptyPromptViewComponent {}
