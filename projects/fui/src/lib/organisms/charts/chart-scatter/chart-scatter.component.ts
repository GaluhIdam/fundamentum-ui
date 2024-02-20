import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { ScatterChart } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemesChart } from '../theme-chart';

/**
 * The ChartScatterComponent component
 * @usage
 * ```html
 * <fui-chart-scatter
    [data]="data"
    [title]="'Scatter Chart'"
    [subTitle]="'This is example scatter chart'"
    [alignmentTitleX]="'right'"
    [alignmentTitleY]="'top'"
    [themeChart]="themeChart">
 * </fui-chart-scatter>
 * ```
 * <example-url>http://localhost:4200/chart/chart-scatter </example-url>
 */

@Component({
  selector: 'fui-chart-scatter',
  standalone: true,
  imports: [],
  templateUrl: './chart-scatter.component.html',
  styleUrl: './chart-scatter.component.scss',
})
export class ChartScatterComponent {
  /**
   * @ignore
   */
  @ViewChild('echarts') echartsRef?: ElementRef;

  @Input({ required: true }) data: number[][] = [];
  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
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
      ScatterChart,
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
          padding: [
            20, // up
            10, // right
            5, // down
            10, // left
          ],
          textStyle: {
            fontSize: 15,
          },
          subtextStyle: {
            fontSize: 10,
          },
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: this.data,
            type: 'scatter',
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
