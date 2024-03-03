import { Component } from '@angular/core';
import { ChartBarComponent } from 'fui';

@Component({
  selector: 'app-chart-bar-view',
  standalone: true,
  imports: [ChartBarComponent],
  templateUrl: './chart-bar-view.component.html',
  styleUrl: './chart-bar-view.component.scss',
  host: { ngSkipHydration: 'false' },
})
export class ChartBarViewComponent {
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
  seriesData: string[] | number[] = [150, 230, 224, 218, 135, 147, 260];
  themeChart: 'light' | 'dark' = 'light';
  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }
}
