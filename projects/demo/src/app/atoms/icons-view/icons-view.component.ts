import { Component } from '@angular/core';
import { Icon, IconsComponent } from 'fui';

@Component({
  selector: 'app-icons-view',
  standalone: true,
  templateUrl: './icons-view.component.html',
  styleUrl: './icons-view.component.scss',
  imports: [IconsComponent],
})
export class IconsViewComponent {
  icons: Icon[] = [
    'accessibility',
    'aggregate',
    'alert',
    'analyzeEvent',
    'annotation',
    'apmTrace',
    'apps',
    'arrowDown',
    'arrowEnd',
    'arrowLeft',
    'arrowRight',
    'arrowStart',
    'arrowUp',
    'article',
    'asterisk',
    'beaker',
    'bell',
    'bellSlash',
    'beta',
    'bolt',
    'boxesHorizontal',
    'boxesVertical',
    'branch',
    'broom',
    'brush',
    'bug',
    'bullseye',
    'calendar',
    'check',
    'checkInCircleFilled',
    'cheer',
    'clock',
    'cloudDrizzle',
    'cloudStormy',
    'cloudSunny',
    'cluster',
    'color',
    'compute',
    'console',
    'container',
    'continuityAbove',
    'continuityAboveBelow',
    'continuityBelow',
    'continuityWithin',
    'controlsHorizontal',
    'controlsVertical',
    'copy',
    'copyClipboard',
    'cross',
    'crosshairs',
    'crossInACircleFilled',
    'currency',
    'cut',
    'database',
    'desktop',
    'discuss',
    'document',
    'documentation',
    'documentEdit',
    'documents',
    'dot',
    'dotInCircle',
    'download',
    'email',
    'eql',
    'eraser',
    'error',
    'exit',
    'expand',
    'expandMini',
    'export',
    'eye',
    'eyeClosed',
    'faceHappy',
    'faceNeutral',
    'faceSad',
    'filter',
    'filterExclude',
    'filterIgnore',
    'filterInCircle',
    'filterInclude',
    'flag',
    'fold',
    'folder_exclamation',
    'folderCheck',
    'folderClosed',
    'folderOpen',
    'frameNext',
    'framePrevious',
    'fullScreen',
    'fullScreenExit',
    'function',
    'gear',
    'glasses',
    'globe',
    'glyph',
    'grab',
    'grabHorizontal',
    'grid',
    'heart',
    'heatmap',
    'help',
    'home',
    'iInCircle',
    'image',
    'importAction',
    'indexClose',
    'indexEdit',
    'indexFlush',
    'indexMapping',
    'indexOpen',
    'indexRuntime',
    'indexSettings',
    'indexTemporary',
    'infinity',
    'inputOutput',
    'inspect',
    'invert',
    'ip',
    'keyboard',
    'kqlField',
    'kqlFunction',
    'kqlOperand',
    'kqlSelector',
    'kqlValue',
    'kubernetesNode',
    'kubernetesPod',
    'launch',
    'layers',
    'lettering',
    'lineDashed',
    'lineDotted',
    'lineSolid',
    'link',
    'list',
    'listAdd',
    'lock',
    'lockOpen',
    'logstashFilter',
    'logstashIf',
    'logstashInput',
    'logstashOutput',
    'logstashQueue',
    'magnet',
    'magnifyWithExclamation',
    'magnifyWithMinus',
    'magnifyWithPlus',
    'mapMarker',
    'memory',
    'menu',
    'menuLeft',
    'menuRight',
    'merge',
    'minimize',
    'minus',
    'minusInCircle',
    'minusInCircleFilled',
    'moon',
    'namespace',
    'nested',
    'node',
    'number',
    'offline',
    'online',
    'package',
    'pageSelect',
    'pagesSelect',
    'paperClip',
    'partial',
    'pause',
    'payment',
    'pencil',
    'percent',
    'pin',
    'pinFilled',
    'play',
    'playFilled',
    'plus',
    'plusInCircle',
    'plusInCircleFilled',
    'popout',
    'push',
    'questionInCircle',
    'quote',
    'refresh',
    'reporter',
    'returnKey',
    'save',
    'scale',
    'search',
    'securitySignal',
    'securitySignalDetected',
    'securitySignalResolved',
    'shard',
    'share',
    'snowflake',
    'sortable',
    'sortAscending',
    'sortDescending',
    'sortDown',
    'sortLeft',
    'sortRight',
    'sortUp',
    'spaces',
    'starEmpty',
    'starEmptySpace',
    'starFilled',
    'starFilledSpace',
    'starMinusEmpty',
    'starMinusFilled',
    'starPlusEmpty',
    'starPlusFilled',
    'stats',
    'stop',
    'stopFilled',
    'stopSlash',
    'storage',
    'string',
    'submodule',
    'sun',
    'symlink',
    'tableDensityCompact',
    'tableDensityExpanded',
    'tableDensityNormal',
    'tableOfContents',
    'tag',
    'tear',
    'temperature',
    'timeline',
    'timeRefresh',
    'timeslider',
    'training',
    'trash',
    'unfold',
    'unlink',
    'user',
    'userAvatar',
    'users',
    'videoPlayer',
    'visArea',
    'visAreaStacked',
    'visBarHorizontal',
    'visBarHorizontalStacked',
    'visBarVertical',
    'visBarVerticalStacked',
    'visGauge',
    'visGoal',
    'visLine',
    'visMapCoordinate',
    'visMapRegion',
    'visMetric',
    'visPie',
    'visTable',
    'visTagCloud',
    'visText',
    'visTimelion',
    'visVega',
    'visVisualBuilder',
    'wordWrap',
    'wordWrapDisabled',
    'wrench',
  ];
}