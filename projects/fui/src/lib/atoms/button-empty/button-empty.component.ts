import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-button-empty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-empty.component.html',
  styleUrl: './button-empty.component.scss',
})
export class ButtonEmptyComponent {
  @Input('color') colorValue = 'primary';
  @Input('size') sizeValue: string = 'sizem';
  @Input('type') typeValue: string = 'button';
  @Input('width') widthValue: string = 'auto';
  @Input('weight') weightValue: 'light' | 'normal' | 'bold' | 'bolder' =
    'normal';
}
