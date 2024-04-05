import { Component } from '@angular/core';
import { ProgressBaseComponent, ProgressComponent } from 'fui';

@Component({
  selector: 'app-progress-view',
  standalone: true,
  templateUrl: './progress-view.component.html',
  styleUrl: './progress-view.component.scss',
  imports: [ProgressBaseComponent, ProgressComponent],
})
export class ProgressViewComponent {}
