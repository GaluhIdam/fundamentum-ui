import { Component } from '@angular/core';
import {
  Color,
  HorizontalStackComponent,
} from 'fui';

@Component({
  selector: 'app-horizontal-stack-view',
  standalone: true,
  imports: [HorizontalStackComponent],
  templateUrl: './horizontal-stack-view.component.html',
  styleUrl: './horizontal-stack-view.component.scss',
})
export class HorizontalStackViewComponent {
  progressSegments: { percentage: number; color: Color }[] = [
    { percentage: 15, color: 'primary' },
    { percentage: 10, color: 'success' },
    { percentage: 12, color: 'warning' },
    { percentage: 11, color: 'danger' },
    { percentage: 9, color: 'text' },
    { percentage: 13, color: 'accent' },
    { percentage: 5, color: 'ghost' },
    { percentage: 14, color: 'ink' },
    { percentage: 11, color: 'disabled' },
  ];
  progressSegments2: { percentage: number; color: Color }[] = [
    { percentage: 30, color: 'primary' },
    { percentage: 60, color: 'text' },
    { percentage: 10, color: 'warning' }
  ];
}
