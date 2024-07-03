import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

/**
 * The TooltipComponent
 * @usage
 * ```html
 * <fui-tooltip
 *  [position]="'top'"
 *  [title]="'Title Tooltip'"
 *  [content]="'Tooltip Content'"
 * > Tooltip
 * </fui-tooltip>
 * ```
 * <example-url>http://localhost:4200/templates/tooltip</example-url>
 */

@Component({
  selector: 'fui-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  imports: [CommonModule, TextComponent],
})
export class TooltipComponent {
  @Input() displayTooltip: boolean = true;
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'top';
  @Input() align: 'start' | 'center' | 'end' = 'center';
  @Input() tooltipRadius: 'none' | 's' | 'm' = 's';
  @Input() custom: boolean = false;
}
