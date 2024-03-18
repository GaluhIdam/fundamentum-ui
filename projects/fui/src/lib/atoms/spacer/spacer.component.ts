import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-spacer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spacer.component.html',
  styleUrl: './spacer.component.scss',
})
export class SpacerComponent {
  @Input() direction: 'horizontal' | 'vertical' = 'vertical';
  @Input() size: 'sizexs' | 'sizes' | 'sizem' | 'sizel' | 'sizexl' | 'sizexxl' =
    'sizel';
}
