export type Color =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'text'
  | 'accent'
  | 'ghost'
  | 'ink'
  | 'disabled';

export type Size =
  | 'sizedefault'
  | 'sizexs'
  | 'sizes'
  | 'sizem'
  | 'sizel'
  | 'sizexl'
  | 'sizexxl';

export type Icon =
  | 'accessibility'
  | 'aggregate'
  | 'alert'
  | 'analyzeEvent'
  | 'annotation'
  | 'apmTrace'
  | 'apps'
  | 'arrowDown'
  | 'arrowEnd'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowStart'
  | 'arrowUp'
  | 'article'
  | 'asterisk'
  | 'beaker'
  | 'bell'
  | 'bellSlash'
  | 'beta'
  | 'bolt'
  | 'boxesHorizontal'
  | 'boxesVertical'
  | 'branch'
  | 'broom'
  | 'brush'
  | 'bug'
  | 'bullseye'
  | 'calendar'
  | 'check'
  | 'checkInCircleFilled'
  | 'cheer'
  | 'clock'
  | 'cloudDrizzle'
  | 'cloudStormy'
  | 'cloudSunny'
  | 'cluster'
  | 'color'
  | 'compute'
  | 'console'
  | 'container'
  | 'continuityAbove'
  | 'continuityAboveBelow'
  | 'continuityBelow'
  | 'continuityWithin'
  | 'controlsHorizontal'
  | 'controlsVertical'
  | 'copy'
  | 'copyClipboard'
  | 'cross'
  | 'crosshairs'
  | 'crossInACircleFilled'
  | 'currency'
  | 'cut'
  | 'database'
  | 'desktop'
  | 'discuss'
  | 'document'
  | 'documentation'
  | 'documentEdit'
  | 'documents'
  | 'dot'
  | 'dotInCircle'
  | 'download'
  | 'email'
  | 'eql'
  | 'eraser'
  | 'error'
  | 'exit'
  | 'expand'
  | 'expandMini'
  | 'export'
  | 'eye'
  | 'eyeClosed'
  | 'faceHappy'
  | 'faceNeutral'
  | 'faceSad'
  | 'filter'
  | 'filterExclude'
  | 'filterIgnore'
  | 'filterInCircle'
  | 'filterInclude'
  | 'flag'
  | 'fold'
  | 'folder_exclamation'
  | 'folderCheck'
  | 'folderClosed'
  | 'folderOpen'
  | 'frameNext'
  | 'framePrevious'
  | 'fullScreen'
  | 'fullScreenExit'
  | 'function'
  | 'gear'
  | 'glasses'
  | 'globe'
  | 'glyph'
  | 'grab'
  | 'grabHorizontal'
  | 'grid'
  | 'heart'
  | 'heatmap'
  | 'help'
  | 'home'
  | 'iInCircle'
  | 'image'
  | 'importAction'
  | 'indexClose'
  | 'indexEdit'
  | 'indexFlush'
  | 'indexMapping'
  | 'indexOpen'
  | 'indexRuntime'
  | 'indexSettings'
  | 'indexTemporary'
  | 'infinity'
  | 'inputOutput'
  | 'inspect'
  | 'invert'
  | 'ip'
  | 'keyboard'
  | 'kqlField'
  | 'kqlFunction'
  | 'kqlOperand'
  | 'kqlSelector'
  | 'kqlValue'
  | 'kubernetesNode'
  | 'kubernetesPod'
  | 'launch'
  | 'layers'
  | 'lettering'
  | 'lineDashed'
  | 'lineDotted'
  | 'lineSolid'
  | 'link'
  | 'list'
  | 'listAdd'
  | 'lock'
  | 'lockOpen'
  | 'logstashFilter'
  | 'logstashIf'
  | 'logstashInput'
  | 'logstashOutput'
  | 'logstashQueue'
  | 'magnet'
  | 'magnifyWithExclamation'
  | 'magnifyWithMinus'
  | 'magnifyWithPlus'
  | 'mapMarker'
  | 'memory'
  | 'menu'
  | 'menuLeft'
  | 'menuRight'
  | 'merge'
  | 'minimize'
  | 'minus'
  | 'minusInCircle'
  | 'minusInCircleFilled'
  | 'moon'
  | 'namespace'
  | 'nested'
  | 'node'
  | 'number'
  | 'offline'
  | 'online'
  | 'package'
  | 'pageSelect'
  | 'pagesSelect'
  | 'paperClip'
  | 'partial'
  | 'pause'
  | 'payment'
  | 'pencil'
  | 'percent'
  | 'pin'
  | 'pinFilled'
  | 'play'
  | 'playFilled'
  | 'plus'
  | 'plusInCircle'
  | 'plusInCircleFilled'
  | 'popout'
  | 'push'
  | 'questionInCircle'
  | 'quote'
  | 'refresh'
  | 'reporter'
  | 'returnKey'
  | 'save'
  | 'scale'
  | 'search'
  | 'securitySignal'
  | 'securitySignalDetected'
  | 'securitySignalResolved'
  | 'shard'
  | 'share'
  | 'snowflake'
  | 'sortable'
  | 'sortAscending'
  | 'sortDescending'
  | 'sortDown'
  | 'sortLeft'
  | 'sortRight'
  | 'sortUp'
  | 'spaces'
  | 'starEmpty'
  | 'starEmptySpace'
  | 'starFilled'
  | 'starFilledSpace'
  | 'starMinusEmpty'
  | 'starMinusFilled'
  | 'starPlusEmpty'
  | 'starPlusFilled'
  | 'stats'
  | 'stop'
  | 'stopFilled'
  | 'stopSlash'
  | 'storage'
  | 'string'
  | 'submodule'
  | 'sun'
  | 'symlink'
  | 'tableDensityCompact'
  | 'tableDensityExpanded'
  | 'tableDensityNormal'
  | 'tableOfContents'
  | 'tag'
  | 'tear'
  | 'temperature'
  | 'timeline'
  | 'timeRefresh'
  | 'timeslider'
  | 'training'
  | 'trash'
  | 'unfold'
  | 'unlink'
  | 'user'
  | 'userAvatar'
  | 'users'
  | 'videoPlayer'
  | 'visArea'
  | 'visAreaStacked'
  | 'visBarHorizontal'
  | 'visBarHorizontalStacked'
  | 'visBarVertical'
  | 'visBarVerticalStacked'
  | 'visGauge'
  | 'visGoal'
  | 'visLine'
  | 'visMapCoordinate'
  | 'visMapRegion'
  | 'visMetric'
  | 'visPie'
  | 'visTable'
  | 'visTagCloud'
  | 'visText'
  | 'visTimelion'
  | 'visVega'
  | 'visVisualBuilder'
  | 'wordWrap'
  | 'wordWrapDisabled'
  | 'wrench';

export interface BreadcrumbData {
  label: string;
  link: string;
}

export interface AvatarGroupProps {
  id?: string;
  name?: string;
  type?: AvatarType;
  color?: Color;
  image?: string;
  icon?: Icon;
}

export type AvatarType = 'initial' | 'icon' | 'image';

export interface DataCheckboxProps {
  label: string;
  value: string;
  isChecked?: boolean;
  indeterminate?: boolean;
}

export interface DataRadioProps {
  label: string;
  value: string;
}

export interface ToastProps {
  id?: string;
  type?: Color;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  header?: {
    title?: string;
    sizeTitle?: Size;
    colorTitle?: Color;
    icon?: Icon;
    sizeIcon?: Size;
    colorIcon?: Color;
  };
  body?: {
    message?: string;
    size?: Size;
  };
  footer?: {
    text?: string;
    color?: Color;
    size?: Size;
    isActionDismiss?: boolean;
    action?: () => void;
  };
  duration?: number;
}

export interface TreeViewProps {
  id?: string;
  label: string;
  labelSize?: Size;
  labelColor?: Color;
  icon?: Icon;
  iconSize?: Size;
  iconColor?: Color;
  isExpanded: boolean;
  iconCollapsed?: Icon;
  iconExpanded?: Icon;
  children?: TreeViewProps[];
}

export interface DescriptionListProps {
  title: string;
  description: string;
}
export interface ContextMenuProps {
  id: string;
  title?: string;
  isMenu?: boolean;
  items?: ContextMenuItemProps[];
}

export interface ContextMenuItemProps {
  id: string;
  label?: string;
  labelSize?: Size;
  labelColor?: Color;
  icon?: Icon;
  iconSize?: Size;
  iconColor?: Color;
  iconExpand?: Icon;
  isDisabled?: boolean;
  isTooltip?: boolean;
  tooltipPosition?: 'left' | 'right' | 'top' | 'bottom';
  tooltipAlign?: 'start' | 'center' | 'end';
  tooltipTitle?: string;
  tooltipContent?: string;
  closeAfterClick?: boolean;
  isLink?: boolean;
  linkHref?: string;
  linkTarget?: '_self' | '_blank';
  action?: () => void;
  children?: ContextMenuProps;
}

export interface PopoverConfigProps {
  position?: 'left' | 'right' | 'top' | 'bottom';
  align?: 'start' | 'center' | 'end';
  popoverRadius?: 'none' | 's' | 'm';
  popoverPadding?: 'none' | 's' | 'm' | 'l';
  displayHeader?: boolean;
  displayHeaderIcon?: boolean;
  headerIcon?: Icon;
  headerTitle?: string;
  headerSize?: Size;
  displayFooter?: boolean;
  footerType?: 'text' | 'button' | 'custom';
  footerText?: string;
  footerSize?: Size;
  footerButtonType?: 'button' | 'button-empty';
  footerButtonText?: string;
  footerButtonColor?: Color;
}

export enum StepStatus {
  CURRENT = 'current',
  COMPLETE = 'complete',
  INCOMPLETE = 'incomplete',
  WARNING = 'warning',
  ERROR = 'error',
  DISABLED = 'disabled',
}

export interface StepProps {
  id: string;
  stepType?: 'number' | 'icon';
  stepStatus: StepStatus;
  stepIcon?: {
    [key in StepStatus]?: Icon;
  };
  stepBackground?: {
    [key in StepStatus]?: Color;
  };
  stepColor?: {
    [key in StepStatus]?: Color;
  };
  title?: string;
  titleColor?: Color;
  titleSize?: Size;
}

export interface FacetButtonProps {
  id: string;
  type: 'avatar' | 'icon' | 'indicator' | 'none';
  facetLabel: {
    label: string;
    color?: Color;
    size?: Size;
  };
  facetIcon?: {
    icon: Icon;
    color?: Color;
    size?: Size;
  };
  facetAvatar?: {
    id?: string;
    shape?: 'user' | 'spaces';
    type: AvatarType;
    size?: Size;
    color?: Color;
    name?: string;
    image?: string;
    icon?: Icon;
    avatarBorder?: boolean;
  };
  facetIndicator?: {
    size?: Size;
    color?: Color;
  };
  facetQuantity: {
    quantity: number;
    color?: Color;
    background?: Color;
    activeColor?: Color;
    activeBackground?: Color;
    size?: Size;
  };
  isSelected?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface ListGroupItemProps {
  id: string;
  itemOptions?: { background?: Color; backgroundActive?: Color };
  itemLabel: {
    label: string;
    color?: Color;
    colorActive?: Color;
    size?: Size;
    labelWrap?: 'elipsis' | 'wrap';
  };
  itemIcon?: {
    icon?: Icon;
    color?: Color;
    colorActive?: Color;
    size?: Size;
  };
  isActive?: boolean;
  isDisabled?: boolean;
  isLink?: boolean;
  itemLink?: {
    href?: string;
    target?: '_blank' | '_self';
    withIcon?: boolean;
    icon: Icon;
    size: Size;
    color: Color;
    colorActive?: Color;
  };
  itemTooltip?: {
    isTooltip?: boolean;
    tooltipPosition?: 'left' | 'right' | 'top' | 'bottom';
    tooltipAlign?: 'start' | 'center' | 'end';
    tooltipTitle?: string;
    tooltipContent?: string;
  };
  isExtraAction?: boolean;
  extraAction?: {
    disabled?: boolean;
    pinnable?: boolean;
    pinned?: boolean;
    iconPinned?: Icon;
    iconUnpinned?: Icon;
    colorPinned?: Color;
    colorUnpinned?: Color;
    size?: Size;
    isDisabled?: boolean;
  };
}
