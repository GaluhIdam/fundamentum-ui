import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemesChart } from '../theme-chart';
import { LabelLayout } from 'echarts/features';

/**
 * The ChartPieComponent component
 * @usage
 * ```html
 * <fui-chart-radar
    [indicator]="indicator"
    [series]="series"
    [title]="'Radar Chart'"
    [subTitle]="'This is example radar chart'"
    [alignmentTitleX]="'right'"
    [alignmentTitleY]="'top'"
    [themeChart]="themeChart">
 * </fui-chart-radar>
 * ```
 * <example-url>http://localhost:4200/chart/chart-radar</example-url>
 */

@Component({
  selector: 'fui-chart-radar',
  standalone: true,
  imports: [],
  templateUrl: './chart-radar.component.html',
  styleUrl: './chart-radar.component.scss',
})
export class ChartRadarComponent {
  /**
   * @ignore
   */
  @ViewChild('echarts') echartsRef?: ElementRef;

  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input({ required: true }) indicator?: Array<{
    name: string;
    max: number;
  }>;
  @Input({ required: true }) series?: Array<{
    value: number[];
    name: string;
  }>;
  @Input({ required: true }) title: string = 'Main Title';
  @Input({ required: true }) subTitle: string = 'Sub Title';
  @Input() titleSize: number = 15;
  @Input() subtitleSize: number = 12;
  @Input() alignmentTitleX: 'left' | 'center' | 'right' = 'right';
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
      CanvasRenderer,
      RadarChart,
      TitleComponent,
      LegendComponent,
      LabelLayout,
      TooltipComponent,
      GridComponent,
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
    }
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
      radar: {
        // shape: 'circle',
        indicator: this.indicator,
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: this.series,
        },
      ],
    };
    this.chartInstance?.setOption(option);
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
