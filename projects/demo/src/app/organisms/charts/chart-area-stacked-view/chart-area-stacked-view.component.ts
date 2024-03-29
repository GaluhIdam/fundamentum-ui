import { Component } from '@angular/core';
import { ChartAreaStackedComponent } from 'fui';

@Component({
  selector: 'app-chart-area-stacked-view',
  standalone: true,
  imports: [ChartAreaStackedComponent],
  templateUrl: './chart-area-stacked-view.component.html',
  styleUrl: './chart-area-stacked-view.component.scss',
})
export class ChartAreaStackedViewComponent {
  // Area Stacked Chart Data
  seriesData: Array<{
    name: string;
    type: 'line';
    stack: 'Total';
    areaStyle: {};
    emphasis: {
      focus: 'series';
    };
    data: number[];
  }> = [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ];
  categoryData: number[] | string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ];
  themeChart: 'light' | 'dark' = 'light';
  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }
}
