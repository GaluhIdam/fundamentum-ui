import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { OptionChart } from './utility/option.dto';
import * as echarts from 'echarts/core';
import { ThemesChart } from './theme-chart';
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components';
import {
  BarChart,
  GaugeChart,
  LineChart,
  PieChart,
  ScatterChart,
} from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { UniversalTransition } from 'echarts/features';

/**
 * The CalloutComponent
 * @usage
 * ```html
 * <fui-echarts
      [chartOption]="optionGauge"
      [themeChart]="themeChart">
 * </fui-echarts>
 * ```
 * <example-url>http://localhost:4200/organisms/echarts</example-url>
 */

@Component({
  selector: 'fui-echarts',
  standalone: true,
  imports: [],
  templateUrl: './echarts.component.html',
  styleUrl: './echarts.component.scss',
})
export class EchartsComponent {
  @Input({ required: true }) chartOption?: OptionChart;
  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input() triggered: boolean = false;

  /**
   * @ignore
   */
  @ViewChild('echarts') echartsRef?: ElementRef;

  /**
   * @ignore
   */
  chartInstance?: echarts.ECharts;

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
      DataZoomComponent,
      MarkAreaComponent,
      MarkLineComponent,
      VisualMapComponent,
      TimelineComponent,
      LineChart,
      BarChart,
      PieChart,
      ScatterChart,
      GaugeChart,
      CanvasRenderer,
      UniversalTransition,
    ]);
    this.registerTheme();
  }

  /**
   * @ignore
   */
  ngAfterViewInit(): void {
    this.initEchart();
  }

  /**
   * @ignore
   */
  ngOnChanges(changes: any): void {
    if (this.chartInstance) {
      if (changes.themeChart) {
        this.changeTheme();
      }
      const option: any = this.chartOption;
      this.chartInstance.setOption(option);
    }
  }

  /**
   * @ignore
   */
  registerTheme(): void {
    echarts.registerTheme('light', ThemesChart.light);
    echarts.registerTheme('dark', ThemesChart.dark);
  }

  /**
   * @ignore
   */
  initEchart(): void {
    this.chartInstance = echarts.init(
      this.echartsRef?.nativeElement,
      this.themeChart,
      {
        width: 'auto',
        height: 'auto',
        renderer: 'canvas',
      }
    );
    const option: any = this.chartOption;
    this.chartInstance.setOption(option);
  }

  /**
   * @ignore
   */
  changeTheme(): void {
    this.chartInstance?.dispose();
    this.initEchart();
  }
}
