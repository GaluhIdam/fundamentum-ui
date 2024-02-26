import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon } from '../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../../public-api';
//TODO: EXAMPLE FOR COMPODOC
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
  @Input() iconSide?: 'right' | 'left';
  @Input({ required: true }) option: 'iconText' | 'icon' | 'text' = 'iconText';
  @Input() color: Color = 'primary';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  handleOnClick(): void {
    this.onClick.emit();
  }
}
