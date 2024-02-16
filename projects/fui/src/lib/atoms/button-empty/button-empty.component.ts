import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-button-empty',
  standalone: true,
  imports: [],
  templateUrl: './button-empty.component.html',
  styleUrl: './button-empty.component.scss',
})
export class ButtonEmptyComponent {
  @Input('color') colorValue = 'primary';
  @Input('size') sizeValue: string = 'sizem';
  @Input('width') widthValue: string = 'auto';
}
