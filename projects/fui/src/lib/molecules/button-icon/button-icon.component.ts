import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon } from '../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../../public-api';

/**
 * The ButtonIconComponent component
 * @usage
 * ```html
 * <fui-button-icon
    [type]="'button'"
    [option]="'icon'"
    [style]="'secondary'"
    [text]="'Button Primary'"
    [color]="'primary'"
    [icon]="'apps'"
    [iconSide]="'left'"
    (onClick)="handleButtonClick($event)">
 * </fui-button-icon>
 * ```
 * <example-url>http://localhost:4200/molecules/button-icon</example-url>
 */
@Component({
  selector: 'fui-button-icon',
  standalone: true,
  imports: [CommonModule, IconsComponent],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss',
})
export class ButtonIconComponent {
  @Input({ required: true }) type: 'submit' | 'button' | 'reset' = 'button';
  @Input() fullWidth?: 'full-width';
  @Input() disabled: boolean = false;
  @Input() style: 'secondary' | 'filled' = 'filled';
  @Input() text?: string;
  @Input() icon?: Icon;
  @Input() iconSide?: 'right' | 'left' = 'left';
  @Input({ required: true }) option: 'iconText' | 'icon' | 'text' = 'iconText';
  @Input() color: Color = 'primary';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleOnClick(): void {
    this.onClick.emit();
  }
}
