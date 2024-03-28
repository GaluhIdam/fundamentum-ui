import { TimelineViewComponent } from './organisms/timeline-view/timeline-view.component';
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
import { FlyoutViewComponent } from './templates/flyout-view/flyout-view.component';
import { CalloutViewComponent } from './organisms/callout-view/callout-view.component';
import { LinkViewComponent } from './atoms/link-view/link-view.component';
import { ButtonIconViewComponent } from './molecules/button-icon-view/button-icon-view.component';
import { TextFieldComplexViewComponent } from './molecules/text-field-complex-view/text-field-complex-view.component';
import { TooltipViewComponent } from './templates/tooltip-view/tooltip-view.component';
import { LoadingViewComponent } from './molecules/loading-view/loading-view.component';
import { InlineEditViewComponent } from './organisms/inline-edit-view/inline-edit-view.component';
import { DataGridViewComponent } from './organisms/data-grid-view/data-grid-view.component';
import { TabsViewComponent } from './molecules/tabs-view/tabs-view.component';
import { SidenavViewComponent } from './templates/sidenav-view/sidenav-view.component';
import { CollapsibleNavViewComponent } from './templates/collapsible-nav-view/collapsible-nav-view.component';
import { ComboBoxViewComponent } from './molecules/combo-box-view/combo-box-view.component';
import { FieldFilepickerViewComponent } from './molecules/field-filepicker-view/field-filepicker-view.component';
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
import { ContextMenuViewComponent } from './templates/context-menu-view/context-menu-view.component';
import { StepsViewComponent } from './organisms/steps-view/steps-view.component';
import { FacetButtonViewComponent } from './organisms/facet-button-view/facet-button-view.component';

export const routes: Routes = [
  {
    title: 'Demo',
    path: '',
    component: AppComponent,
  },
  /* Router for Organisms */
  {
    title: 'demo page',
    path: 'demo',
    component: DemoComponent,
  },
  /* Router for chart area */
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
        path: 'steps',
        component: StepsViewComponent,
      },
      {
        path: 'timeline',
        component: TimelineViewComponent,
      },
      {
        path: 'facet-button',
        component: FacetButtonViewComponent,
      },
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
        path: 'flyout',
        component: FlyoutViewComponent,
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
      {
        path: 'context-menu',
        component: ContextMenuViewComponent,
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
        path: 'text-field',
        component: TextFieldComplexViewComponent,
      },
      {
        path: 'combo-box',
        component: ComboBoxViewComponent,
      },
      {
        path: 'field-filepicker',
        component: FieldFilepickerViewComponent,
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
  /* Router for Molecules */
];
