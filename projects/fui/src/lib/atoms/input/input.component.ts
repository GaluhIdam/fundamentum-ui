import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-input-base',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  // @Input('type') typeValue?: string;
  // @Input('label') textValue?: string;
  // @Input('helpText') helpTextValue?: string;
  @Input('placeholder') placeholderValue = '';
  @Input('color') colorValue = 'primary';
  @Input('size') sizeValue: string = 'sizem';
  @Input('width') widthValue: string = 'auto';
}
