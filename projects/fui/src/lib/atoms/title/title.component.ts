import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input('color') colorValue:
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'text'
    | 'textlight'
    | 'accent' = 'primary';
  @Input('size') titleSize?:
    | 'sizexxxs'
    | 'sizexxs'
    | 'sizexs'
    | 'sizes'
    | 'sizem'
    | 'sizel' = 'sizel';
  @Input() fontWeight: 'bold' | 'normal' | 'light' = 'normal';
  @Input('position') positionValue: 'left' | 'center' | 'right' | 'justify' =
    'left';
}
