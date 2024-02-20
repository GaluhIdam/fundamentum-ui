import { Component } from '@angular/core';
import { ChartCandlestickComponent } from 'fui';

@Component({
  selector: 'app-chart-candlestick-view',
  standalone: true,
  imports: [ChartCandlestickComponent],
  templateUrl: './chart-candlestick-view.component.html',
  styleUrl: './chart-candlestick-view.component.scss',
})
export class ChartCandlestickViewComponent {
  //Candlestick Chart Data
  seriesCandleStick: number[][] = [
    [20, 34, 10, 38],
    [40, 35, 30, 50],
    [31, 38, 33, 44],
    [38, 15, 5, 42],
  ];
  dataCandleStick: string[] = [
    '2017-10-24',
    '2017-10-25',
    '2017-10-26',
    '2017-10-27',
  ];
  themeChart: 'light' | 'dark' = 'light';
  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }
}
