import { TimelineViewComponent } from './organisms/timeline-view/timeline-view.component';
import { Routes } from '@angular/router';
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
import { ResizableContainerViewComponent } from './templates/resizable-container-view/resizable-container-view.component';
import { EchartsViewComponent } from './organisms/echarts-view/echarts-view.component';
import { AppComponent } from './app.component';
import { HeaderViewComponent } from './templates/header-view/header-view.component';
import { FilterGroupViewComponent } from './organisms/filter-group-view/filter-group-view.component';
import { StepsViewComponent } from './organisms/steps-view/steps-view.component';
import { FacetButtonViewComponent } from './organisms/facet-button-view/facet-button-view.component';
import { PageViewComponent } from './templates/page-view/page-view.component';
import { AspectRatioViewComponent } from './atoms/aspect-ratio-view/aspect-ratio-view.component';
import { IconsViewComponent } from './atoms/icons-view/icons-view.component';
import { BadgeViewComponent } from './atoms/badge-view/badge-view.component';
import { ProgressViewComponent } from './atoms/progress-view/progress-view.component';
import { EmptyPromptViewComponent } from './organisms/empty-prompt-view/empty-prompt-view.component';
import { AccordionViewComponent } from './organisms/accordion-view/accordion-view.component';
import { PaginationViewComponent } from './organisms/pagination-view/pagination-view.component';
import { FlexViewComponent } from "./templates/flex-view/flex-view.component";

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
        path: 'filter-group',
        component: FilterGroupViewComponent,
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
        path: 'empty-prompt',
        component: EmptyPromptViewComponent,
      },
      {
        path: 'accordion',
        component: AccordionViewComponent,
      },
      {
        path: 'pagination',
        component: PaginationViewComponent,
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
        path: 'echarts',
        component: EchartsViewComponent,
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
      {
        path: 'aspect-ratio',
        component: AspectRatioViewComponent,
      },
      {
        path: 'icon',
        component: IconsViewComponent,
      },
      {
        path: 'badge',
        component: BadgeViewComponent,
      },
      {
        path: 'progress',
        component: ProgressViewComponent,
      },
    ],
  },
  /* Router for Atoms */

  /* Router for template */
  {
    path: 'templates',
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
        path: 'header',
        component: HeaderViewComponent,
      },
      {
        path: 'header/:id',
        component: HeaderViewComponent,
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
      {
        path: 'page',
        component: PageViewComponent,
      },
      {
        path: 'resizable-container',
        component: ResizableContainerViewComponent,
      },
      {
        path: 'flex',
        component: FlexViewComponent,
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
