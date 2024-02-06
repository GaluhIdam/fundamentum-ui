import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input('color') colorValue = 'primary';
  @Input('size') sizeValue: string = 'sizem';
  @Input('width') widthValue: string = 'auto';
  @Input('isDisabled') isDisabledValue: boolean = false;
}
