import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() direction: 'horzontal' | 'vertical' = 'horzontal';
  @Input() isGrow: boolean = true;
  @Input() isRestrictWidth: boolean = false;
}
