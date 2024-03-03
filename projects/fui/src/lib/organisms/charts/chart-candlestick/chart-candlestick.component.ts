import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { CandlestickChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemesChart } from '../theme-chart';
import { LabelLayout, UniversalTransition } from 'echarts/features';

/**
 * The ChartCandlestickComponent component
 * @usage
 * ```html
  * <fui-chart-candlestick
      [series]="seriesCandleStick"
      [category]="dataCandleStick"
      [title]="'Candlestick Chart'"
      [subTitle]="'This is example candlestick chart'"
      [alignmentTitleX]="'center'"
      [alignmentTitleY]="'top'"
      [themeChart]="themeChart">
 * </fui-chart-candlestick>
 * ```
 * <example-url>http://localhost:4200/organisms/chart/chart-candlestick</example-url>
 */

@Component({
  selector: 'fui-chart-candlestick',
  standalone: true,
  imports: [],
  templateUrl: './chart-candlestick.component.html',
  styleUrl: './chart-candlestick.component.scss',
})
export class ChartCandlestickComponent {
  /**
   * @ignore
   */
  @ViewChild('echarts') echartsRef?: ElementRef;

  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input({ required: true }) category: number[] | string[] = [];
  @Input({ required: true }) series: number[][] = [];
  @Input({ required: true }) title: string = 'Main Title';
  @Input({ required: true }) subTitle: string = 'Sub Title';
  @Input() titleSize: number = 15;
  @Input() subtitleSize: number = 12;
  @Input() alignmentTitleX: 'left' | 'center' | 'right' = 'center';
  @Input() alignmentTitleY: 'top' | 'bottom' | 'center' = 'top';

  /**
   * @ignore
   */
  private chartInstance?: echarts.ECharts;

  /**
   * @ignore
   */
  constructor() {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      LegendComponent,
      GridComponent,
      UniversalTransition,
      CanvasRenderer,
      CandlestickChart,
      LabelLayout,
    ]);
  }

  /**
   * @ignore
   */
  ngAfterViewInit(): void {
    this.initEChart();
  }

  /**
   * @ignore
   */
  ngOnChanges(): void {
    if (this.chartInstance) {
      this.changeTheme();
    }
  }

  /**
   * @ignore
   */
  //Register Theme
  registerTheme(): void {
    echarts.registerTheme('light', ThemesChart.light);
    echarts.registerTheme('dark', ThemesChart.dark);
  }

  /**
   * @ignore
   */
  //Initialize Chart
  initEChart(): void {
    if (typeof document !== 'undefined') {
      this.chartInstance = echarts.init(
        this.echartsRef?.nativeElement,
        this.themeChart,
        {
          width: 'auto',
          height: 'auto',
          renderer: 'canvas',
        }
      );
      const option: echarts.EChartsCoreOption = {
        grid: {
          containLabel: false,
        },
        title: {
          text: this.title,
          subtext: this.subTitle,
          left: this.alignmentTitleX,
          top: this.alignmentTitleY,
          textStyle: {
            fontSize: this.titleSize,
          },
          subtextStyle: {
            fontSize: this.subtitleSize,
          },
          padding: [
            20, // up
            10, // right
            5, // down
            10, // left
          ],
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        xAxis: {
          data: this.category,
        },
        yAxis: {},
        series: [
          {
            type: 'candlestick',
            data: this.series,
          },
        ],
      };
      this.chartInstance.setOption(option);
    }
  }

  /**
   * @ignore
   */
  //Change Theme
  changeTheme(): void {
    this.chartInstance?.dispose();
    this.initEChart();
  }
}
