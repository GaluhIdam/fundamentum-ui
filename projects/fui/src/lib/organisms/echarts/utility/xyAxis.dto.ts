export interface YAxisDTO {
  type?: 'value' | 'category';
  data?: Array<string | number>;
  scale?: boolean;
  name?: string;
  max?: number;
  min?: number;
  boundaryGap?: Array<
    string | number | Object | Array<string | number | Object>
  >;
}

export interface XAxisDTO {
  type?: 'value' | 'category';
  boundaryGap?: boolean;
  data?: Array<string | number>;
}
