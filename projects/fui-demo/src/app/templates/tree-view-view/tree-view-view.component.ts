import { Component } from '@angular/core';
import { TreeViewComponent, TreeViewProps } from 'fui';

@Component({
  selector: 'app-tree-view-view',
  standalone: true,
  templateUrl: './tree-view-view.component.html',
  styleUrl: './tree-view-view.component.scss',
  imports: [TreeViewComponent],
})
export class TreeViewViewComponent {
  dataTreeView: TreeViewProps[] = [
    {
      id: 'item-one',
      label: 'Item One',
      icon: 'folderOpen',
      isExpanded: false,
      iconCollapsed: 'arrowRight',
      iconExpanded: 'arrowDown',
      children: [
        {
          id: 'item-a',
          label: 'Item A',
          icon: 'document',
          isExpanded: false,
        },
        {
          id: 'item-b',
          label: 'Item B',
          icon: 'document',
          iconCollapsed: 'arrowRight',
          iconExpanded: 'arrowDown',
          isExpanded: false,
          children: [
            {
              id: 'item-b-cloud',
              label: 'A Cloud',
              icon: 'alert',
              isExpanded: false,
            },
            {
              id: 'item-b-bug',
              label: `I'm a Bug`,
              icon: 'bug',
              isExpanded: false,
            },
          ],
        },
        {
          id: 'item-c',
          label: 'Item C',
          icon: 'document',
          iconCollapsed: 'arrowRight',
          iconExpanded: 'arrowDown',
          isExpanded: false,
          children: [
            {
              id: 'item-c-cloud',
              label: 'Another Cloud',
              icon: 'cloudStormy',
              isExpanded: false,
            },
            {
              id: 'item-c-text',
              label: `This one is a really long...`,
              icon: 'logstashIf',
              isExpanded: false,
            },
          ],
        },
      ],
    },
    {
      id: 'item-two',
      label: 'Item Two',
      icon: 'folderOpen',
      isExpanded: false,
    },
  ];

  handleOnclikItem(item: TreeViewProps) {
    console.log('clicked item', item);
  }
}
