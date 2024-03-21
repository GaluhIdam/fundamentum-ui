import { Component } from '@angular/core';
import { ChartRadarComponent } from 'fui';

@Component({
  selector: 'app-chart-radar-view',
  standalone: true,
  imports: [ChartRadarComponent],
  templateUrl: './chart-radar-view.component.html',
  styleUrl: './chart-radar-view.component.scss',
})
export class ChartRadarViewComponent {
  //Radar Chart Data
  indicatorRadar: Array<{
    name: string;
    max: number;
  }> = [
    { name: 'Sales', max: 6500 },
    { name: 'Administration', max: 16000 },
    { name: 'Information Technology', max: 30000 },
    { name: 'Customer Support', max: 38000 },
    { name: 'Development', max: 52000 },
    { name: 'Marketing', max: 25000 },
  ];
  seriesRadar: Array<{
    value: number[];
    name: string;
  }> = [
    {
      value: [4200, 3000, 20000, 35000, 50000, 18000],
      name: 'Allocated Budget',
    },
    {
      value: [5000, 14000, 28000, 26000, 42000, 21000],
      name: 'Actual Spending',
    },
  ];

  themeChart: 'light' | 'dark' = 'light';
  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }
}
