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
import { CommonModule } from '@angular/common';

/**
 * The EchartsComponent
 * @usage
 * ```html
 * <fui-echarts
    [chartOption]="optionStacked"
    [themeChart]="themeChart">
 * </fui-echarts>
 * ```
 * <example-url>http://localhost:4200/organisms/echarts</example-url>
 */
@Component({
  selector: 'fui-echarts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './echarts.component.html',
  styleUrl: './echarts.component.scss',
})
export class EchartsComponent {
  @Input({ required: true }) chartOption?: OptionChart;
  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input() triggered: boolean = false;
  @Input() height: string = '70vh';

  @ViewChild('echarts') echartsRef?: ElementRef;

  chartInstance?: echarts.ECharts;

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

  ngAfterViewInit(): void {
    this.initEchart();
    this.observeWidthChanges();
  }

  ngOnChanges(changes: any): void {
    if (this.chartInstance) {
      if (changes.themeChart) {
        this.changeTheme();
      }
      const option: any = this.chartOption;
      this.chartInstance.setOption(option);
    }
  }

  registerTheme(): void {
    echarts.registerTheme('light', ThemesChart.light);
    echarts.registerTheme('dark', ThemesChart.dark);
  }

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

  changeTheme(): void {
    this.chartInstance?.dispose();
    this.initEchart();
  }

  observeWidthChanges(): void {
    const element = this.echartsRef!.nativeElement;
    const observer = new ResizeObserver(() => {
      if (this.chartInstance) {
        this.chartInstance.dispose();
        setTimeout(() => {
          this.initEchart();
        }, 100);
      }
    });
    observer.observe(element);
  }
}
