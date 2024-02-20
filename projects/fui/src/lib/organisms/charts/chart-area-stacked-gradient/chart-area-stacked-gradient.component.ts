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
 * The ChartPieComponent component
 * @usage
 * ```html
 * <fui-chart-area-stacked-gradient
    [series]="series"
    [category]="category"
    [title]="'Area Stacked Gradient Chart'"
    [subTitle]="'This is example Area Stacked Gradiet chart'"
    [alignmentTitleX]="'center'"
    [alignmentTitleY]="'top'"
    [legend]="legend"
    [themeChart]="themeChart">
 * </fui-chart-area-stacked-gradient>
 * ```
 * <example-url>http://localhost:4200/chart/chart-area-stacked-gradient</example-url>
 */

@Component({
  selector: 'fui-chart-area-stacked-gradient',
  standalone: true,
  imports: [],
  templateUrl: './chart-area-stacked-gradient.component.html',
  styleUrl: './chart-area-stacked-gradient.component.scss',
})
export class ChartAreaStackedGradientComponent {
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
    smooth: true;
    lineStyle: {
      width: 0;
    };
    areaStyle: {
      opacity: 0.8;
      color?: echarts.graphic.LinearGradient;
    };
    emphasis: {
      focus: 'series';
    };
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
            10, // up
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
            axisLabel: {
              show: true,
            },
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
