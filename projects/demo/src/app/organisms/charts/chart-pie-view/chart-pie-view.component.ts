import { Component } from '@angular/core';
import { ChartPieComponent } from 'fui';

@Component({
  selector: 'app-chart-pie-view',
  standalone: true,
  imports: [ChartPieComponent],
  templateUrl: './chart-pie-view.component.html',
  styleUrl: './chart-pie-view.component.scss',
})
export class ChartPieViewComponent {
  //Pie Chart Data
  dataPie: Array<{
    value: number;
    name: string;
  }> = [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
  ];
  themeChart: 'light' | 'dark' = 'light';
  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }
}
