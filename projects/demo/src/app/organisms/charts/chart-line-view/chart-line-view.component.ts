import { Component } from '@angular/core';
import { ChartLineComponent } from 'fui';

@Component({
  selector: 'app-chart-line-view',
  standalone: true,
  imports: [ChartLineComponent],
  templateUrl: './chart-line-view.component.html',
  styleUrl: './chart-line-view.component.scss',
  host: { ngSkipHydration: 'false' },
})
export class ChartLineViewComponent {
  //Line & Bar Chart Data
  categoryData: string[] | number[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];
  seriesData: number[] = [150, 230, 224, 218, 135, 147, 260];
  themeChart: 'light' | 'dark' = 'light';
  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }
}
