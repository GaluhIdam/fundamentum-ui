export interface VisualMapDTO {
  type?: string | 'piecewise';
  show?: boolean;
  dimension?: number;
  seriesIndex?: number;
  pieces?: Array<PiecesDTO>;
}

interface PiecesDTO {
  gt?: number;
  lt?: number;
  color?: string | 'rgba(0, 0, 180, 0.4)';
}
