export interface SeriesDTO {
  pointer?: {
    show?: boolean;
  };
  progress?: {
    show?: boolean;
    overlap?: boolean;
    roundCap?: boolean;
    clip?: boolean;
    itemStyle?: {
      borderWidth?: number;
      borderColor?: string | '#464646';
    };
  };
  axisLine?: {
    lineStyle?: {
      width?: number;
    };
  };
  splitLine?: {
    show?: boolean;
    distance?: number;
    length?: number;
  };
  axisTick?: {
    show?: boolean;
  };
  axisLabel?: {
    show?: boolean;
    distance?: number;
  };
  title?: {
    fontSize?: number;
  };
  startAngle?: number;
  endAngle?: number;
  symbol?: string | 'none';
  xAxisIndex?: number;
  yAxisIndex?: number;
  symbolSize?: number | 20;
  avoidLabelOverlap?: boolean;
  name?: string;
  type: 'line' | 'bar' | 'scatter' | 'pie' | 'gauge';
  areaStyle?: {
    opacity?: number;
    color?: string;
  };
  detail?: {
    width?: number;
    height?: number;
    fontSize?: number;
    color?: string;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    /**  User Guide
     * @description
     * - {a}: series name.
     * - {b}: the name of a data item.
     * - {c}: the value of a data item.
     * - {@xxx}: the value of a dimension named 'xxx', for example, {@product} refers the value of 'product' dimension.
     * - {@[n]}: the value of a dimension at the index of n, for example, {@[3]} refers the value at dimensions[3].
     *
     * @example
     * formatter: '{b}: {@score}'
     */
    formatter?: string;
  };
  emphasis?: {
    focus?: 'series' | 'label';
    itemStyle?: {
      shadowBlur?: number | 10;
      shadowOffsetX?: number;
      shadowColor?: string | 'rgba(0, 0, 0, 0.5)';
    };
    label?: {
      show: boolean;
      fontSize: number | 40;
      fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter';
    };
  };
  label?: {
    show: boolean;
    position?:
      | 'center'
      | 'top'
      | 'right'
      | 'left'
      | 'bottom'
      | 'inside'
      | 'insideBottom';
    verticalAlign?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'center' | 'right';
    rotate?: number | 0;
    distance?: number | 15;

    /**  User Guide
     * @description
     * - {a}: series name.
     * - {b}: the name of a data item.
     * - {c}: the value of a data item.
     * - {@xxx}: the value of a dimension named 'xxx', for example, {@product} refers the value of 'product' dimension.
     * - {@[n]}: the value of a dimension at the index of n, for example, {@[3]} refers the value at dimensions[3].
     *
     * @example
     * formatter: '{b}: {@score}'
     */
    formatter?: string;
  };
  markLine?: {
    symbol?: Array<string>;
    lineStyle?: {
      type: 'solid' | 'dashed' | 'dotted';
    };
    label?: {
      show?: boolean;
    };
    data?:
      | Array<Array<{ type: 'min' | 'max' | 'average' | 'median' }>>
      | Array<{ xAxis: number } | { yAxis: number }>;
  };
  lineStyle?: {
    color: string;
    width: number;
  };

  /**  User Guide
   * @description
   * - For Pie Chart
   * - Border Radius
   * @example
   * - radius: '0%'
   * - radius: '50%'
   * - radius: '100%'
   *
   */
  radius?: string | Array<string | number>;
  center?: string | Array<string | number>;
  data: any[];
  stack?: string;
  smooth?: boolean | number;
  roseType?: 'radius' | 'area';
  itemStyle?: {
    borderRadius: number;
  };
}
