export interface SelectableDTO {
  label: string;
  description?: string;
  value: string | number | object | Array<any> | null;
  onCheck: 'on' | 'off' | 'mixed' | undefined;
}
