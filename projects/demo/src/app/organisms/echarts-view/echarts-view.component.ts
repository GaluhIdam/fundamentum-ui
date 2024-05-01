import { Component } from '@angular/core';
import {
  EchartsComponent,
  OptionChart,
} from 'fui';
// import {
//   EchartsComponent,
//   OptionChart,
// } from 'fui';

@Component({
  selector: 'app-echarts-view',
  standalone: true,
  imports: [EchartsComponent],
  templateUrl: './echarts-view.component.html',
  styleUrl: './echarts-view.component.scss',
})
export class EchartsViewComponent {
  themeChart: 'light' | 'dark' = 'light';
  triggered: boolean = false;

  /** Line Stacked */
  optionStacked: OptionChart = {
    title: {
      text: 'Stacked Area Chart',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          type: 'png',
        },
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  /** Area */
  optionAreaPieces: OptionChart = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '30%'],
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: 'rgba(0, 0, 180, 0.2)',
        },
        {
          gt: 5,
          lt: 7,
          color: 'rgba(0, 0, 180, 0.2)',
        },
      ],
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#5470C6',
          width: 5,
        },
        markLine: {
          symbol: ['none', 'none'],
          label: { show: false },
          data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
        },
        areaStyle: {},
        data: [
          ['2019-10-10', 200],
          ['2019-10-11', 560],
          ['2019-10-12', 750],
          ['2019-10-13', 580],
          ['2019-10-14', 250],
          ['2019-10-15', 300],
          ['2019-10-16', 450],
          ['2019-10-17', 300],
          ['2019-10-18', 100],
        ],
      },
    ],
  };

  /** Gauge Standard */
  optionGauge: OptionChart = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
          formatter: '{value}',
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
          },
        ],
      },
    ],
  };

  /** Gauge Ring */
  gaugeData: any = [
    {
      value: 20,
      name: 'Perfect',
      title: {
        offsetCenter: ['0%', '-30%'],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '-20%'],
      },
    },
    {
      value: 40,
      name: 'Good',
      title: {
        offsetCenter: ['0%', '0%'],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '10%'],
      },
    },
    {
      value: 60,
      name: 'Commonly',
      title: {
        offsetCenter: ['0%', '30%'],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '40%'],
      },
    },
  ];
  optionGaugeRing: OptionChart = {
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: '#464646',
          },
        },
        axisLine: {
          lineStyle: {
            width: 40,
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
          distance: 50,
        },
        data: this.gaugeData,
        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: 'inherit',
          borderColor: 'inherit',
          borderRadius: 20,
          borderWidth: 1,
          formatter: '{value}%',
        },
      },
    ],
  };

  /** Bar Option */
  optionBar: OptionChart = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 302, 301, 334, 390, 330, 320],
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [150, 212, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  changeTheme(): void {
    this.themeChart = this.themeChart === 'light' ? 'dark' : 'light';
  }

  triggeredAction(): void {
    this.triggered = !this.triggered;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.gaugeData[0].value = +(Math.random() * 100).toFixed(2);
      this.gaugeData[1].value = +(Math.random() * 100).toFixed(2);
      this.gaugeData[2].value = +(Math.random() * 100).toFixed(2);
      this.triggeredAction();
    }, 1000);
  }
}
