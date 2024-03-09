import { Component, Input } from '@angular/core';
import { TextComponent } from '../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-image',
  standalone: true,
  imports: [TextComponent, CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input('src') srcValue?: string;
  @Input('alt') altValue?: string;
  @Input() labelText?: string;
  @Input() size: 'sizexs' | 'sizes' | 'sizem' | 'sizel' | 'sizexl' | 'sizexxl' =
    'sizel';
}
