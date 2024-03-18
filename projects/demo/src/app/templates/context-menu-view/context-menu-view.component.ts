import { Component } from '@angular/core';
import {
  ButtonComponent,
  ContextMenuComponent,
  ContextMenuItemProps,
  ContextMenuProps,
  IconsComponent,
} from 'fui';

@Component({
  selector: 'app-context-menu-view',
  standalone: true,
  templateUrl: './context-menu-view.component.html',
  styleUrl: './context-menu-view.component.scss',
  imports: [ContextMenuComponent, ButtonComponent, IconsComponent],
})
export class ContextMenuViewComponent {
  dataContextMenu: ContextMenuProps = {
    id: 'context-menu',
    title: 'This is a context menu',
    isMenu: true,
    items: [
      {
        label: 'Handle an onClick',
        id: 'handle-an-onclick',
        icon: 'search',
        closeAfterClick: true,
      },
      {
        label: 'Go to a link',
        id: 'go-to-a-link',
        icon: 'user',
        isLink: true,
        linkHref: 'https://www.google.com',
        linkTarget: '_blank',
      },
      {
        label: 'Nest panels',
        id: 'nest-panels',
        icon: 'wrench',
        iconExpand: 'arrowRight',
        children: {
          id: 'nest-panels',
          title: 'Nest panels',
          isMenu: true,
          items: [
            {
              label: 'PDF reports',
              id: 'pdf-reports',
              icon: 'user',
              children: {
                id: 'pdf-report-options',
                title: 'PDF Reports',
                isMenu: true,
                items: [
                  {
                    label: 'With Chart',
                    id: 'with-chart',
                    icon: 'document',
                  },
                  {
                    label: 'Without Chart',
                    id: 'without-chart',
                    icon: 'document',
                  },
                ],
              },
            },
            {
              label: 'Embed code',
              id: 'embed-code',
              icon: 'user',
            },
            {
              label: 'Permalinks',
              id: 'permalinks',
              icon: 'user',
            },
          ],
        },
      },
      {
        label: 'Add a tooltip',
        id: 'add-a-tooltip',
        icon: 'wrench',
        isTooltip: true,
        tooltipPosition: 'right',
        tooltipTitle: 'Optional tooltip title',
        tooltipContent: 'Optional content for a tooltip',
      },
      {
        label: 'Dynamic Content',
        id: 'dynamic-content',
        icon: 'document',
        children: {
          id: 'content-children',
          title: 'Content Children Dynamic',
          isMenu: false,
        },
      },
      {
        label: 'Use an app icon',
        id: 'use-an-app-icon',
        icon: 'visLine',
        children: {
          id: 'icon-display',
          title: 'Icon Display',
          isMenu: false,
        },
      },
      {
        label: 'Pass an icon as a component to customize it',
        id: 'pass-an-icon-as-a-component-to-customize-it',
        icon: 'trash',
        iconColor: 'danger',
      },
      {
        label: 'Run an action',
        id: 'run-an-action',
        action: () => alert('Context menu run an action'),
      },
      {
        id: 'disable-option',
        label: 'Disabled option',
        icon: 'user',
        isDisabled: true,
        isTooltip: true,
        tooltipPosition: 'right',
        tooltipContent: 'For reasons, this item is disabled',
      },
    ],
  };

  activeItem!: ContextMenuItemProps;

  onClickMenuContextItem(item: ContextMenuItemProps) {
    console.log('item clicked', item);
    this.activeItem = item;
  }
}
