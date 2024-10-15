import { Component, Input } from '@angular/core';
import { Color } from '../../types';
import { CommonModule } from '@angular/common';
import { TextComponent, TooltipComponent } from '../../../public-api';

@Component({
  selector: 'fui-horizontal-stack',
  standalone: true,
  imports: [CommonModule, TextComponent, TooltipComponent],
  templateUrl: './horizontal-stack.component.html',
  styleUrl: './horizontal-stack.component.scss',
})
export class HorizontalStackComponent {
  @Input({ required: true }) progress: {
    percentage: number;
    color: Color | string;
  }[] = [];
  @Input() showPercentage: 'inline' | 'tooltip' | 'none' = 'none';
  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';

  /** Color check for custom */
  colorCheck(color: string): boolean {
    const validColors = [
      'primary',
      'success',
      'warning',
      'danger',
      'text',
      'accent',
      'ghost',
      'ink',
    ];
    return validColors.includes(color);
  }
}
