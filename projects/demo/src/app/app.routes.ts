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
import { HeaderViewComponent } from './templates/header-view/header-view.component';
import { FilterGroupViewComponent } from './organisms/filter-group-view/filter-group-view.component';
import { StepsViewComponent } from './organisms/steps-view/steps-view.component';
import { FacetButtonViewComponent } from './organisms/facet-button-view/facet-button-view.component';
import { SelectableViewComponent } from './organisms/selectable-view/selectable-view.component';
import { SitewideViewComponent } from './templates/sitewide-view/sitewide-view.component';
import { IntroduceViewComponent } from './introduce-view/introduce-view.component';
import { PageViewComponent } from './templates/page-view/page-view.component';
import { AspectRatioViewComponent } from './atoms/aspect-ratio-view/aspect-ratio-view.component';
import { IconsViewComponent } from './atoms/icons-view/icons-view.component';
import { BadgeViewComponent } from './atoms/badge-view/badge-view.component';
import { ProgressViewComponent } from './atoms/progress-view/progress-view.component';
import { EmptyPromptViewComponent } from './organisms/empty-prompt-view/empty-prompt-view.component';
import { AccordionViewComponent } from './organisms/accordion-view/accordion-view.component';
import { PaginationViewComponent } from './organisms/pagination-view/pagination-view.component';
import { FlexViewComponent } from './templates/flex-view/flex-view.component';
import { ListGroupViewComponent } from './organisms/list-group-view/list-group-view.component';
import { CodeBlockViewComponent } from './atoms/code-block-view/code-block-view.component';
import { CalendarViewComponent } from './templates/calendar-view/calendar-view.component';
import { TourViewComponent } from './organisms/tour-view/tour-view.component';
import { CollapsibleNavGroupViewComponent } from './organisms/collapsible-nav-group-view/collapsible-nav-group-view.component';

/** ATTENTION, ADD A TITLE IN CHILDREN ROUTE FOR THE DOCUMENTATION */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'getting-started',
  },
  {
    title: 'Fundamentum UI',
    path: 'getting-started',
    component: IntroduceViewComponent,
  },
  {
    title: 'demo page',
    path: 'demo',
    component: DemoComponent,
  },

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
        title: 'Link',
        path: 'link',
        component: LinkViewComponent,
      },
      {
        title: 'Aspect Ratio',
        path: 'aspect-ratio',
        component: AspectRatioViewComponent,
      },
      {
        title: 'Icon',
        path: 'icon',
        component: IconsViewComponent,
      },
      {
        title: 'Badge',
        path: 'badge',
        component: BadgeViewComponent,
      },
      {
        title: 'Progress',
        path: 'progress',
        component: ProgressViewComponent,
      },
      {
        path: 'code-block',
        component: CodeBlockViewComponent,
      },
    ],
  },
  /* Router for Atoms */

  /* Router for Molecules */
  {
    path: 'molecules',
    children: [
      {
        path: '',
        redirectTo: 'breadcrumb',
        pathMatch: 'full',
      },
      {
        title: 'Breadcrumb',
        path: 'breadcrumb',
        component: BreadcrumbViewComponent,
      },
      {
        title: 'Button',
        path: 'button',
        component: ButtonIconViewComponent,
      },
      {
        title: 'Loading',
        path: 'loading',
        component: LoadingViewComponent,
      },
      {
        title: 'Tabs',
        path: 'tabs',
        component: TabsViewComponent,
      },
      {
        title: 'Form Control',
        path: 'form-control',
        component: TextFieldComplexViewComponent,
      },
      {
        title: 'Combo Box',
        path: 'combo-box',
        component: ComboBoxViewComponent,
      },
      {
        title: 'Field Filepicker',
        path: 'field-filepicker',
        component: FieldFilepickerViewComponent,
      },
      {
        title: 'Avatar',
        path: 'avatar',
        component: AvatarViewComponent,
      },
      {
        title: 'Checkbox',
        path: 'checkbox',
        component: CheckboxViewComponent,
      },
      {
        title: 'Radio',
        path: 'radio',
        component: RadioViewComponent,
      },
      {
        title: 'Highlight',
        path: 'highlight',
        component: HighlightViewComponent,
      },
    ],
  },
  /* Router for Molecules */

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
        title: 'Filter Group',
        path: 'filter-group',
        component: FilterGroupViewComponent,
      },
      {
        title: 'Collapsible Nav Group',
        path: 'collapsible-nav-group',
        component: CollapsibleNavGroupViewComponent,
      },
      {
        title: 'Empty Prompt',
        path: 'empty-prompt',
        component: EmptyPromptViewComponent,
      },
      {
        title: 'Accordion',
        path: 'accordion',
        component: AccordionViewComponent,
      },
      {
        title: 'List Group',
        path: 'list-group',
        component: ListGroupViewComponent,
      },
      {
        title: 'Callout',
        path: 'callout',
        component: CalloutViewComponent,
      },
      {
        title: 'Inline Edit',
        path: 'inline-edit',
        component: InlineEditViewComponent,
      },
      {
        title: 'Data Grid',
        path: 'data-grid',
        component: DataGridViewComponent,
      },
      {
        title: 'Steps',
        path: 'steps',
        component: StepsViewComponent,
      },
      {
        title: 'Timeline',
        path: 'timeline',
        component: TimelineViewComponent,
      },
      {
        title: 'Facet Button',
        path: 'facet-button',
        component: FacetButtonViewComponent,
      },
      {
        title: 'Echarts',
        path: 'echarts',
        component: EchartsViewComponent,
      },
      {
        title: 'Pagination',
        path: 'pagination',
        component: PaginationViewComponent,
      },
      {
        title: 'Selectable',
        path: 'selectable',
        component: SelectableViewComponent,
      },
      {
        title: 'Tour',
        path: 'tour',
        component: TourViewComponent,
      },
    ],
  },
  /* Router for Organisms */

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
        title: 'Modal Component',
        path: 'modal',
        component: ModalViewComponent,
      },
      {
        title: 'Header',
        path: 'header',
        component: HeaderViewComponent,
      },
      {
        title: 'Panel',
        path: 'panel',
        component: PanelViewComponent,
      },
      {
        title: 'Flyout',
        path: 'flyout',
        component: FlyoutViewComponent,
      },
      {
        title: 'Sitewide Search',
        path: 'sitewide',
        component: SitewideViewComponent,
      },
      {
        title: 'Side Navigation',
        path: 'side-nav',
        component: SidenavViewComponent,
        children: [
          {
            title: 'Test',
            path: 'test',
            component: SidenavViewComponent,
          },
          {
            title: 'Test 2',
            path: 'test-2',
            component: SidenavViewComponent,
          },
        ],
      },
      {
        title: 'Collapsible Navigation',
        path: 'collapsible-nav',
        component: CollapsibleNavViewComponent,
      },
      {
        title: 'Tooltip',
        path: 'tooltip',
        component: TooltipViewComponent,
      },
      {
        title: 'Bottom Bar',
        path: 'bottombar',
        component: BottombarViewComponent,
      },
      {
        title: 'Popover',
        path: 'popover',
        component: PopoverViewComponent,
      },
      {
        title: 'Card',
        path: 'card',
        component: CardViewComponent,
      },
      {
        title: 'Toast',
        path: 'toast',
        component: ToastViewComponent,
      },
      {
        title: 'Tree View',
        path: 'tree-view',
        component: TreeViewViewComponent,
      },
      {
        title: 'Description List',
        path: 'description-list',
        component: DescriptionListViewComponent,
      },
      {
        title: 'Context Menu',
        path: 'context-menu',
        component: ContextMenuViewComponent,
      },
      {
        path: 'page',
        title: 'Page',
        component: PageViewComponent,
      },
      {
        title: 'Resizable Container',
        path: 'resizable-container',
        component: ResizableContainerViewComponent,
      },
      {
        title: 'Flex',
        path: 'flex',
        component: FlexViewComponent,
      },
      {
        title: 'Calendar',
        path: 'calendar',
        component: CalendarViewComponent,
      },
    ],
  },
  /* Router for Templates */
];
