import { Component, Input } from '@angular/core';
import { Color, Icon } from '../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../../public-api';

@Component({
  selector: 'fui-button-icon',
  standalone: true,
  imports: [CommonModule, IconsComponent],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss',
})
export class ButtonIconComponent {
  @Input({ required: true }) type: 'submit' | 'button' | 'disabled' | 'reset' =
    'button';
  @Input() text: string = 'Button Icon';
  @Input() icon?: Icon;
  @Input() position: 'start' | 'end' = 'start';
  @Input() rounded?: 'rounded-sm' | 'rounded-m' | 'rounded-l' | 'rounded-full';
  @Input() textColor: Color = 'ghost';
  @Input() bgColor: Color = 'primary';
}
