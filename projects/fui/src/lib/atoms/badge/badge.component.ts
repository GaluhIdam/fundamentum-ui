import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { IconsComponent } from '../icons/icons.component';

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
  @Input() isBadgeIcon: boolean = false;
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Input() icon!: Icon;
  @Input() underline: boolean = false;
  @Input() rounded: boolean = false;

  onDismiss() {
    this.isDisplay = false;
  }
}
