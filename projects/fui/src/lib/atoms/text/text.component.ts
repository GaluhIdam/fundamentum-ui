import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from '../../types';

@Component({
  selector: 'fui-text',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input() color: Color = 'ink';
  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';
  @Input() textWrap: 'nowrap' | 'wrap' = 'wrap';
  @Input() selector: boolean = true;
  @Input() fwStyle: 'italic' | 'normal' = 'normal';
  @Input() decoration: 'underline' | 'line-through' | 'overline' | 'none' =
    'none';
  @Input() textOverflow: 'ellipsis' | 'clip' | 'none' = 'none';
  @Input() weight:
    | 'thin'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black' = 'regular';
}
