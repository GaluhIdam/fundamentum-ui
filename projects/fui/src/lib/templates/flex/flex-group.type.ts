export const GUTTER_SIZES = ['none', 'xs', 's', 'm', 'l', 'xl'] as const;
export type FlexGroupGutterSize = (typeof GUTTER_SIZES)[number];

export const ALIGN_ITEMS = [
  'stretch',
  'flexStart',
  'flexEnd',
  'center',
  'baseline',
] as const;
export type FlexGroupAlignItems = (typeof ALIGN_ITEMS)[number];

export const JUSTIFY_CONTENTS = [
  'flexStart',
  'flexEnd',
  'center',
  'spaceBetween',
  'spaceAround',
  'spaceEvenly',
] as const;
export type FlexGroupJustifyContent = (typeof JUSTIFY_CONTENTS)[number];

export const DIRECTIONS = [
  'row',
  'rowReverse',
  'column',
  'columnReverse',
] as const;
export type FlexGroupDirection = (typeof DIRECTIONS)[number];
