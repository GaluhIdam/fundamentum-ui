import { Component, Input } from '@angular/core';
import { ProgressBaseComponent } from '../../atoms/progress-base/progress-base.component';
import { Color, Size } from '../../types';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'fui-progress',
  standalone: true,
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
  imports: [ProgressBaseComponent, TextComponent],
})
export class ProgressComponent {
  @Input({ required: true }) value!: number;
  @Input({ required: true }) max!: number;
  @Input() color: Color = 'primary';
  @Input() colorBar!: Color | null;
  @Input() size: Size = 'sizedefault';
  @Input() label: string = '';
  @Input() labelSize: Size = 'sizedefault';
}
