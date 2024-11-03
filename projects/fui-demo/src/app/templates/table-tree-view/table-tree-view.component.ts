import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  TableDataTreeComponent,
  TableHeadTreeComponent,
  TableRowTreeComponent,
  TableTreeComponent,
  TableTreeDTO,
  TextComponent,
} from 'fui';
import { exampleDTO } from './example.dto';

@Component({
  selector: 'app-table-tree-view',
  standalone: true,
  imports: [
    CommonModule,
    TableTreeComponent,
    TableHeadTreeComponent,
    TableRowTreeComponent,
    TableDataTreeComponent,
    TextComponent,
    ButtonIconComponent,
  ],
  templateUrl: './table-tree-view.component.html',
  styleUrl: './table-tree-view.component.scss',
})
export class TableTreeViewComponent {
  header: string[] = ['Name', 'Code', 'Description', ''];
  sortData?: {
    fieldName: string;
    sort: 'asc' | 'desc' | null;
  };

  data: exampleDTO[] = [
    {
      name: 'Category 1',
      code: 'CAT1',
      desc: 'Description of Category 1',
      child: [
        {
          name: 'Subcategory 1.1',
          code: 'SUB1.1',
          desc: 'Description of Subcategory 1.1',
          child: [
            {
              name: 'Item 1.1.1',
              code: 'ITEM1.1.1',
              desc: 'Description of Item 1.1.1',
              child: [],
            },
            {
              name: 'Item 1.1.2',
              code: 'ITEM1.1.2',
              desc: 'Description of Item 1.1.2',
              child: [],
            },
          ],
        },
        {
          name: 'Subcategory 1.2',
          code: 'SUB1.2',
          desc: 'Description of Subcategory 1.2',
          child: [
            {
              name: 'Item 1.2.1',
              code: 'ITEM1.2.1',
              desc: 'Description of Item 1.2.1',
              child: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Category 2',
      code: 'CAT2',
      desc: 'Description of Category 2',
      child: [
        {
          name: 'Subcategory 2.1',
          code: 'SUB2.1',
          desc: 'Description of Subcategory 2.1',
          child: [
            {
              name: 'Item 2.1.1',
              code: 'ITEM2.1.1',
              desc: 'Description of Item 2.1.1',
              child: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Category 3',
      code: 'CAT3',
      desc: 'Description of Category 3',
      child: [],
    },
    {
      name: 'Category 4',
      code: 'CAT4',
      desc: 'Description of Category 4',
      child: [
        {
          name: 'Subcategory 1.1',
          code: 'SUB1.1',
          desc: 'Description of Subcategory 1.1',
          child: [],
        },
      ],
    },
  ];

  dataShowHide: TableTreeDTO[] = [];

  ngOnInit(): void {
    this.data.forEach((item, i) => {
      this.dataShowHide.push({
        status: false,
        child: [],
      });
      item.child.forEach(() =>
        this.dataShowHide[i].child.push({
          status: false,
          child: [],
        })
      );
    });
  }

  /** Toggle Sort */
  toggleSort(event: { fieldName: string; sort: 'asc' | 'desc' | null }): void {
    this.sortData = event;
  }
}
