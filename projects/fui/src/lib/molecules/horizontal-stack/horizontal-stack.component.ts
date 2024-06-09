import { Component, Input } from '@angular/core';
import { Color } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-horizontal-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-stack.component.html',
  styleUrl: './horizontal-stack.component.scss',
})
export class HorizontalStackComponent {
  @Input({ required: true }) progress: { percentage: number; color: Color }[] =
    [];
  @Input() showPercentage: boolean = true;
}
