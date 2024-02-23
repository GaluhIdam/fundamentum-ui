import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { UniversalTransition } from 'echarts/features';
import { ThemesChart } from '../theme-chart';

/**
 * The ChartBarComponent component
 * @usage
 * ```html
 * <fui-chart-bar
     [series]="series"
     [category]="category"
     [title]="'Bar Chart'"
     [subTitle]="'This is example bar chart'"
     [alignmentTitleX]="'center'"
     [alignmentTitleY]="'top'"
     [themeChart]="themeChart">
 * </fui-chart-bar>
 * ```
 * <example-url>http://localhost:4200/organisms/chart/chart-bar</example-url>
 */

@Component({
  selector: 'fui-chart-bar',
  standalone: true,
  imports: [],
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.scss',
})
export class ChartBarComponent {
  /**
   * @ignore
   */
  @ViewChild('echarts', { static: true }) echartsRef?: ElementRef;

  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input({ required: true }) category: number[] | string[] = [];
  @Input({ required: true }) series: number[] | string[] = [];
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
      BarChart,
      TitleComponent,
      TooltipComponent,
      LegendComponent,
    ]);
    this.registerTheme();
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
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
        title: {
          grid: {
            containLabel: false,
          },
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
            type: 'bar',
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
