import { Component } from '@angular/core';
import { ChartAreaComponent } from 'fui';

@Component({
  selector: 'app-chart-area-view',
  standalone: true,
  imports: [ChartAreaComponent],
  templateUrl: './chart-area-view.component.html',
  styleUrl: './chart-area-view.component.scss',
})
export class ChartAreaViewComponent {
  //Area Chart Data
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
