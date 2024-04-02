export interface TitleDTO {
  text?: string;
  subtext?: string;
  left?: 'left' | 'center' | 'right';
  top?: 'top' | 'bottom' | 'center';
  textStyle?: {
    fontSize?: number;
  };
  subtextStyle?: {
    fontSize?: number;
  };
}

export interface DataZoomDTO {
  type?: 'inside' | 'slider';
  show?: boolean;
  realtime?: boolean;
  start?: number;
  end?: number;
  handleSize?: '100%';
}
