export interface SelectableDTO {
  label: string;
  value: string | number | object | Array<any> | null;
  onCheck: 'on' | 'off' | 'mixed' | undefined;
}
