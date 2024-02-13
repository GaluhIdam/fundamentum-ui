import { Component, Input } from '@angular/core';
import { Color, Size } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-progress-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-base.component.html',
  styleUrl: './progress-base.component.scss',
})
export class ProgressBaseComponent {
  @Input({ required: true }) value!: number;
  @Input({ required: true }) max!: number;
  @Input() color: Color = 'primary';
  @Input() size: Size = 'sizedefault';
}
