import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemesChart } from '../theme-chart';

/**
 * The ChartLineComponent component
 * @usage
 * ```html
 * <fui-chart-line
    [series]="series"
    [category]="category"
    [title]="'Line Chart'"
    [subTitle]="'This is example line chart'"
    [alignmentTitleX]="'center'"
    [alignmentTitleY]="'top'"
    [themeChart]="themeChart">
 * </fui-chart-line>
 * ```
 * <example-url>http://localhost:4200/chart/chart-line</example-url>
 */

@Component({
  selector: 'fui-chart-line',
  standalone: true,
  imports: [],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.scss',
})
export class ChartLineComponent {
  /**
   * @ignore
   */
  @ViewChild('echarts') echartsRef?: ElementRef;

  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input({ required: true }) category: number[] | string[] = [];
  @Input({ required: true }) series: number[] = [];
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
      GridComponent,
      UniversalTransition,
      CanvasRenderer,
      LineChart,
      TitleComponent,
      TooltipComponent,
      LegendComponent,
    ]);
    this.registerTheme();
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
        xAxis: {
          type: 'category',
          data: this.category,
        },
        yAxis: {
          type: 'value',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            data: this.series,
            type: 'line',
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
