import { Component, Input } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent {
  @Input() icon!: Icon;
  @Input() size: Size = 'sizedefault';
  @Input() color!: Color;
}
