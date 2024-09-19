import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { IconsComponent } from '../icons/icons.component';
import { TextComponent } from '../text/text.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fui-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  imports: [CommonModule, IconsComponent, TextComponent, RouterModule],
})
export class BadgeComponent {
  /** bagde */
  @Input() customColor: boolean = false;
  @Input() color:
    | 'default'
    | 'hollow'
    | 'primary'
    | 'success'
    | 'accent'
    | 'warning'
    | 'danger'
    | 'disabled'
    | string = 'default';
  @Input() disabled: boolean = false;
  @Input() truncate: boolean = false;

  /** text */
  @Input() textShow: boolean = true;
  @Input() textClick: boolean = false;
  @Input() textColor: Color | string = 'ink';
  @Input() text: string = 'This is badge';

  /** icon */
  @Input() iconShow: boolean = false;
  @Input() iconClick: boolean = false;
  @Input() icon: Icon = 'cross';
  @Input() iconPosition: 'start' | 'end' = 'start';
  @Input() iconColor: Color = 'ink';
  @Input() iconSize: Size = 'sizes';

  /** href */
  @Input() hrefLink: string = '#';

  @Output() onClick: EventEmitter<void> = new EventEmitter();
  @Output() iconOnClick: EventEmitter<void> = new EventEmitter();

  handleClicked() {
    this.onClick.emit();
  }
  handleClickedIcon() {
    this.iconOnClick.emit();
  }

  /** Check custom  color */
  checkCustomColor(color: string): boolean {
    const predefinedColors = [
      'default',
      'hollow',
      'primary',
      'success',
      'accent',
      'warning',
      'danger',
      'disabled',
    ];

    // Check if the color is one of the predefined color names
    return !predefinedColors.includes(color);
  }
}
