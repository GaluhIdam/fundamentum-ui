import { Routes } from '@angular/router';
import { ChartBarViewComponent } from './organisms/charts/chart-bar-view/chart-bar-view.component';
import { ChartLineViewComponent } from './organisms/charts/chart-line-view/chart-line-view.component';
import { AppComponent } from './app.component';
import { ChartPieViewComponent } from './organisms/charts/chart-pie-view/chart-pie-view.component';
import { ChartRadarViewComponent } from './organisms/charts/chart-radar-view/chart-radar-view.component';
import { ChartScatterViewComponent } from './organisms/charts/chart-scatter-view/chart-scatter-view.component';
import { ChartAreaViewComponent } from './organisms/charts/chart-area-view/chart-area-view.component';
import { ChartAreaStackedViewComponent } from './organisms/charts/chart-area-stacked-view/chart-area-stacked-view.component';
import { ChartLineStackedViewComponent } from './organisms/charts/chart-line-stacked-view/chart-line-stacked-view.component';
import { ChartAreaStackedGradientViewComponent } from './organisms/charts/chart-area-stacked-gradient-view/chart-area-stacked-gradient-view.component';
import { ChartPieDoughnutViewComponent } from './organisms/charts/chart-pie-doughnut-view/chart-pie-doughnut-view.component';
import { ChartCandlestickViewComponent } from './organisms/charts/chart-candlestick-view/chart-candlestick-view.component';
import { ChartTreeViewComponent } from './organisms/charts/chart-tree-view/chart-tree-view.component';
import { ModalViewComponent } from './templates/modal-view/modal-view.component';
import { PanelViewComponent } from './templates/panel-view/panel-view.component';
import { BreadcrumbViewComponent } from './molecules/breadcrumb-view/breadcrumb-view.component';
import { CalloutViewComponent } from './organisms/callout-view/callout-view.component';
import { LinkViewComponent } from './atoms/link-view/link-view.component';
import { ButtonIconViewComponent } from './molecules/button-icon-view/button-icon-view.component';
import { TextFieldComplexViewComponent } from './molecules/text-field-complex-view/text-field-complex-view.component';
import { ModalFlyoutViewComponent } from './template/modal-flyout-view/modal-flyout-view.component';
import { LoadingViewComponent } from './molecules/loading-view/loading-view.component';
import { InlineEditViewComponent } from './organisms/inline-edit-view/inline-edit-view.component';
import { DataGridViewComponent } from './organisms/data-grid-view/data-grid-view.component';
import { TabsViewComponent } from './molecules/tabs-view/tabs-view.component';
import { CommentListViewComponent } from './templates/comment-list-view/comment-list-view.component';
import { SidenavViewComponent } from './templates/sidenav-view/sidenav-view.component';
import path from 'path';
import { CollapsibleNavViewComponent } from './templates/collapsible-nav-view/collapsible-nav-view.component';

export const routes: Routes = [
  {
    title: 'Demo',
    path: '',
    component: AppComponent,
  },
  /* Router for Organisms */
  {
    path: 'organisms',
    children: [
      {
        path: '',
        redirectTo: 'callout',
        pathMatch: 'full',
      },
      {
        path: 'callout',
        component: CalloutViewComponent,
      },
      {
        path: 'inline-edit',
        component: InlineEditViewComponent,
      },
      {
        path: 'data-grid',
        component: DataGridViewComponent,
      },
      {
        path: 'charts',
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
    ],
  },
  /* Router for Organisms */

  /* Router for Atoms */
  {
    path: 'atoms',
    children: [
      {
        path: '',
        redirectTo: 'link',
        pathMatch: 'full',
      },
      {
        path: 'link',
        component: LinkViewComponent,
      },
    ],
  },
  /* Router for Atoms */

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
        path: 'modal',
        component: ModalViewComponent,
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
        path: 'comment-list',
        component: CommentListViewComponent,
      },
      {
        path: 'side-nav',
        component: SidenavViewComponent,
        children: [
          {
            path: 'test',
            component: SidenavViewComponent,
          },
          {
            path: 'test-2',
            component: SidenavViewComponent,
          },
        ],
      },
      {
        path: 'collapsible-nav',
        component: CollapsibleNavViewComponent,
      },
    ],
  },
  /* Router for Templates */

  /* Router for Molecules */
  {
    path: 'molecules',
    children: [
      {
        path: 'breadcrumb',
        component: BreadcrumbViewComponent,
      },
      {
        path: 'button-icon',
        component: ButtonIconViewComponent,
      },
      {
        path: 'loading',
        component: LoadingViewComponent,
      },
      {
        path: 'tabs',
        component: TabsViewComponent,
      },
      {
        path: 'text-field/:paramName',
        component: TextFieldComplexViewComponent,
      },
    ],
  },
  /* Router for Molecules */
];
