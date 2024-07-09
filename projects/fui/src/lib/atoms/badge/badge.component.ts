import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { IconsComponent } from '../icons/icons.component';

/**
 * The BadgeComponent
 * @usage
 * ```html
 * <fui-badge
 *  [color]="'primary'"
 *  [size]="'sizedefault'"
 *  [isBadgeIcon]="true"
 *  [icon]="'cross'"
 *  [iconPosition]="'start'"
 * > Badge </fui-badge>
 * ```
 * <example-url>http://localhost:4200/atoms/badge</example-url>
 */

@Component({
  selector: 'fui-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  imports: [CommonModule, IconsComponent],
})
export class BadgeComponent {
  isDisplay: boolean = true;
  @Input({ required: true }) color: Color = 'primary';
  @Input({ required: true }) size: Size = 'sizedefault';
  @Input() sizeIcon: Size = 'sizedefault';
  @Input() isBadgeIcon: boolean = false;
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Input() icon!: Icon;
  @Input() underline: boolean = false;
  @Input() rounded: boolean = false;
  @Output() onClickBadge: EventEmitter<void> = new EventEmitter();

  closeClicked() {
    this.onClickBadge.emit();
    this.isDisplay = false;
  }
  handleClicked() {
    this.onClickBadge.emit();
  }
}
