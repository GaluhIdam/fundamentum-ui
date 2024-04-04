export interface ToolBoxDTO {
  show: boolean;
  feature?: {
    dataZoom?: {
      yAxisIndex: 'none';
    };
    mark?: { show?: boolean };
    dataView?: {
      show?: boolean;
      readOnly?: boolean;
    };
    magicType?: {
      type?: ['line', 'bar', 'stack'];
    };
    restore?: {
      show?: boolean;
      title?: string;
    };
    saveAsImage?: {
      show?: boolean;
      type?: 'jpg' | 'png';
    };
  };
}

export interface TooltipDTO {
  trigger?: 'axis' | 'item';
  axisPointer?: {
    type?: 'cross';
  };
  position?: 'left' | 'right' | 'top' | 'bottom';
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
}
