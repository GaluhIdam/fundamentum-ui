import { Component } from '@angular/core';
import { TextComponent } from 'fui-v2';

@Component({
  selector: 'app-text-view',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './text-view.component.html',
  styleUrl: './text-view.component.scss',
})
export class TextViewComponent {}
