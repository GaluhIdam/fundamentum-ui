import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Color, Size } from '../../types';

@Component({
  selector: 'fui-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {
  isDisplay: boolean = true;
  @Input({ required: true }) color: Color = 'primary';
  @Input({ required: true }) size: Size = 'sizedefault';
  @Input() dimissIcon: boolean = false;
  @Input() dismissPosition: 'start' | 'end' = 'start';
  @Input() underline: boolean = false;
  @Input() rounded: boolean = false;

  onDismiss() {
    this.isDisplay = false;
  }
}
