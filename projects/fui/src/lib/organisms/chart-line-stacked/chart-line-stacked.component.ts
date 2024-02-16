import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemesChart } from '../theme-chart';

/**
 * The ChartLineStackedComponent component
 * @usage
 * ```html
 * <fui-chart-line-stacked
    [category]="category"
    [series]="series"
    [title]="'Line Stacked Chart'"
    [subTitle]="'This is example line stacked chart'"
    [alignmentTitleX]="'right'"
    [alignmentTitleY]="'top'"
    [themeChart]="themeChart">
 * </fui-chart-line-stacked>
 * ```
 * <example-url>http://localhost:4200/chart/chart-line-stacked</example-url>
 */

@Component({
  selector: 'fui-chart-line-stacked',
  standalone: true,
  imports: [],
  templateUrl: './chart-line-stacked.component.html',
  styleUrl: './chart-line-stacked.component.scss',
})
export class ChartLineStackedComponent {
  /**
   * @ignore
   */
  @ViewChild('echarts') echartsRef?: ElementRef;

  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input({ required: true }) category: number[] | string[] = [];
  @Input({ required: true }) series: Array<{
    name: string;
    type: 'line';
    stack: 'Total';
    data: number[];
  }> = [];
  @Input({ required: true }) title: string = 'Main Title';
  @Input({ required: true }) subTitle: string = 'Sub Title';
  @Input() legend: number[] | string[] = [];
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
      ToolboxComponent,
      TooltipComponent,
      GridComponent,
      LegendComponent,
      LineChart,
      CanvasRenderer,
      UniversalTransition,
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          data: this.legend,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              type: 'png',
            },
          },
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.category,
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: this.series,
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
