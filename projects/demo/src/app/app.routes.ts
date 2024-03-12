import { Routes } from '@angular/router';
import { ChartBarViewComponent } from './organisms/chart-bar-view/chart-bar-view.component';
import { ChartLineViewComponent } from './organisms/chart-line-view/chart-line-view.component';
import { AppComponent } from './app.component';
import { ChartPieViewComponent } from './organisms/chart-pie-view/chart-pie-view.component';
import { ChartRadarViewComponent } from './organisms/chart-radar-view/chart-radar-view.component';
import { ChartScatterViewComponent } from './organisms/chart-scatter-view/chart-scatter-view.component';
import { ChartAreaViewComponent } from './organisms/chart-area-view/chart-area-view.component';
import { ChartAreaStackedViewComponent } from './organisms/chart-area-stacked-view/chart-area-stacked-view.component';
import { ChartLineStackedViewComponent } from './organisms/chart-line-stacked-view/chart-line-stacked-view.component';
import { ChartAreaStackedGradientViewComponent } from './organisms/chart-area-stacked-gradient-view/chart-area-stacked-gradient-view.component';
import { ChartPieDoughnutViewComponent } from './organisms/chart-pie-doughnut-view/chart-pie-doughnut-view.component';
import { ChartCandlestickViewComponent } from './organisms/chart-candlestick-view/chart-candlestick-view.component';
import { ChartTreeViewComponent } from './organisms/chart-tree-view/chart-tree-view.component';
import { ModalViewComponent } from './templates/modal-view/modal-view.component';
import { PanelViewComponent } from './templates/panel-view/panel-view.component';
import { BreadcrumbViewComponent } from './molecules/breadcrumb-view/breadcrumb-view.component';
import { ModalFlyoutViewComponent } from './template/modal-flyout-view/modal-flyout-view.component';
import { TooltipViewComponent } from './templates/tooltip-view/tooltip-view.component';
import { LoadingViewComponent } from './molecules/loading-view/loading-view.component';
import { ToastViewComponent } from './templates/toast-view/toast-view.component';
import { DemoComponent } from './pages/demo/demo.component';
import { BottombarViewComponent } from './templates/bottombar-view/bottombar-view.component';
import { AvatarViewComponent } from './molecules/avatar-view/avatar-view.component';
import { CheckboxViewComponent } from './molecules/checkbox-view/checkbox-view.component';
import { RadioViewComponent } from './molecules/radio-view/radio-view.component';
import { HighlightViewComponent } from './molecules/highlight-view/highlight-view.component';
import { PopoverViewComponent } from './templates/popover-view/popover-view.component';
import { CardViewComponent } from './templates/card-view/card-view.component';
import { TreeViewViewComponent } from './templates/tree-view-view/tree-view-view.component';
import { DescriptionListViewComponent } from './templates/description-list-view/description-list-view.component';

export const routes: Routes = [
  {
    title: 'Demo',
    path: '',
    component: AppComponent,
  },
  {
    title: 'demo page',
    path: 'demo',
    component: DemoComponent,
  },
  /* Router for chart area */
  {
    path: 'chart',
    children: [
      {
        path: '',
        redirectTo: 'chart-bar',
        pathMatch: 'full',
      },
      {
        title: 'Chart Bar',
        path: 'chart-bar',
        component: ChartBarViewComponent,
      },
      {
        title: 'Chart Line',
        path: 'chart-line',
        component: ChartLineViewComponent,
      },
      {
        title: 'Chart Line Stacked',
        path: 'chart-line-stacked',
        component: ChartLineStackedViewComponent,
      },
      {
        title: 'Chart Pie',
        path: 'chart-pie',
        component: ChartPieViewComponent,
      },
      {
        title: 'Chart Pie Doughnut',
        path: 'chart-pie-doughnut',
        component: ChartPieDoughnutViewComponent,
      },
      {
        title: 'Chart Radar',
        path: 'chart-radar',
        component: ChartRadarViewComponent,
      },
      {
        title: 'Chart Scatter',
        path: 'chart-scatter',
        component: ChartScatterViewComponent,
      },
      {
        title: 'Chart Area',
        path: 'chart-area',
        component: ChartAreaViewComponent,
      },
      {
        title: 'Chart Area Stacked',
        path: 'chart-area-stacked',
        component: ChartAreaStackedViewComponent,
      },
      {
        title: 'Chart Area Stacked Gradient',
        path: 'chart-area-stacked-gradient',
        component: ChartAreaStackedGradientViewComponent,
      },
      {
        title: 'Chart Candlestick',
        path: 'chart-candlestick',
        component: ChartCandlestickViewComponent,
      },
      {
        title: 'Chart Tree',
        path: 'chart-tree',
        component: ChartTreeViewComponent,
      },
    ],
  },

  /* Router for template */
  {
    path: 'template',
    children: [
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full',
      },
      {
        path: 'panel',
        component: PanelViewComponent,
      },
      {
        path: 'modal',
        component: ModalViewComponent,
      },
      {
        path: 'modal-flyout',
        component: ModalFlyoutViewComponent,
      },
      {
        path: 'tooltip',
        component: TooltipViewComponent,
      },
      {
        path: 'bottombar',
        component: BottombarViewComponent,
      },
      {
        path: 'popover',
        component: PopoverViewComponent,
      },
      {
        path: 'card',
        component: CardViewComponent,
      },
      {
        path: 'toast',
        component: ToastViewComponent,
      },
      {
        path: 'tree-view',
        component: TreeViewViewComponent,
      },
      {
        path: 'description-list',
        component: DescriptionListViewComponent,
      },
    ],
  },
  {
    path: 'molecule',
    children: [
      {
        path: 'breadcrumb',
        component: BreadcrumbViewComponent,
      },
      {
        path: 'loading',
        component: LoadingViewComponent,
      },
      {
        path: 'avatar',
        component: AvatarViewComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxViewComponent,
      },
      {
        path: 'radio',
        component: RadioViewComponent,
      },
      {
        path: 'highlight',
        component: HighlightViewComponent,
      },
    ],
  },
];
