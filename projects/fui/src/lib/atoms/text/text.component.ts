import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color, Size } from '../../types';

@Component({
  selector: 'fui-text',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input('color') colorValue: Color = 'text';
  @Input('size') sizeValue: Size = 'sizem';
  @Input('width') widthValue: string = 'auto';
  @Input('type') typeValue: string = 'normal';
  @Input() textWrap: 'nowrap' | 'wrap' = 'wrap';
  @Input() decoration: 'underline' | 'normal' = 'normal';
  @Input() weight:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black' = 'normal';
}
