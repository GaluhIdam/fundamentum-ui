import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as echarts from 'echarts/core';
import { TooltipComponent } from 'echarts/components';
import { TreeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { ThemesChart } from '../theme-chart';

/**
 * The ChartScatterComponent component
 * @usage
 * ```html
 * <fui-chart-tree
    [series]="seriesData"
    [themeChart]="themeChart"
    [title]="'Scatter Chart'"
    [subTitle]="'This is example scatter chart'"
    [alignmentTitleX]="'center'"
    [alignmentTitleY]="'top'">
 * </fui-chart-tree>
 * ```
 * <example-url>http://localhost:4200/chart/chart-tree</example-url>
 */

@Component({
  selector: 'fui-chart-tree',
  standalone: true,
  imports: [],
  templateUrl: './chart-tree.component.html',
  styleUrl: './chart-tree.component.scss',
})
export class ChartTreeComponent {
  /**
   * @ignore
   */
  @ViewChild('echarts') echartsRef?: ElementRef;

  @Input({ required: true }) themeChart: 'light' | 'dark' = 'light';
  @Input({ required: true }) series: {
    name: string;
    children: {
      name: string;
      children: {
        name: string;
        value?: number;
        children?: {
          name: string;
          value?: number;
          children?: {
            name: string;
            value: number;
          }[];
        }[];
      }[];
    }[];
  }[] = [];
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
    echarts.use([TooltipComponent, TreeChart, CanvasRenderer]);
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
          trigger: 'item',
          triggerOn: 'mousemove',
        },
        series: [
          {
            type: 'tree',

            data: this.series,

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            symbolSize: 7,

            label: {
              position: 'left',
              verticalAlign: 'middle',
              align: 'right',
              fontSize: 9,
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left',
              },
            },

            emphasis: {
              focus: 'descendant',
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
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
