export interface LegendDTO {
  orient?: 'vertical' | 'horizontal';
  left?: 'left' | 'center' | 'right';
  data?: Array<string>;
  top?: 'top' | 'bottom' | string;
}

export interface GridDTO {
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  containLabel?: boolean;
}
