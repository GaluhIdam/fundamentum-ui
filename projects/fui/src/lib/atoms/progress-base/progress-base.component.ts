import { Component, Input } from '@angular/core';
import { Color, Size } from '../../types';
import { CommonModule } from '@angular/common';

/**
 * The ProgressBaseComponent
 * @usage
 * ```html
 * <fui-progress-base
 *  [value]="50"
 *  [max]="100"
 *  [color]="'primary'"
 *  [size]="'sizedefault'"
 * ></fui-progress-base>
 * ```
 * <example-url>http://localhost:4200/atoms/progress</example-url>
 */

@Component({
  selector: 'fui-progress-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-base.component.html',
  styleUrl: './progress-base.component.scss',
})
export class ProgressBaseComponent {
  @Input({ required: true }) value!: number;
  @Input({ required: true }) max!: number;
  @Input() color: Color = 'primary';
  @Input() colorBar!: Color | null;
  @Input() size: Size = 'sizedefault';
}
