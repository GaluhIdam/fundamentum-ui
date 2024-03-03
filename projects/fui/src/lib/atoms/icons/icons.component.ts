import { Component, Input } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';

/**
 * The IconsComponent component
 * @usage
 * ```html
 * <fui-icons
    [icon]="'wordWrap'"
    [size]="'sizexs'"
    [color]="'success'">
 * </fui-icons>
 * ```
 * <example-url>http://localhost:4200/organisms/chart/chart-area</example-url>
 */

@Component({
  selector: 'fui-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent {
  @Input({ required: true }) icon!: Icon;
  @Input() size: Size = 'sizedefault';
  @Input() color!: Color;
}
