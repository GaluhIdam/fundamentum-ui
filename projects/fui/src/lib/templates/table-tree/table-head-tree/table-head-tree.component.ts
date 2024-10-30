import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ButtonIconComponent,
  Icon,
  IconsComponent,
  PopoverComponent,
  TextComponent,
} from '../../../../public-api';

@Component({
  selector: 'fui-table-head-tree',
  standalone: true,
  imports: [
    CommonModule,
    PopoverComponent,
    ButtonIconComponent,
    IconsComponent,
    TextComponent
  ],
  templateUrl: './table-head-tree.component.html',
  styleUrl: './table-head-tree.component.scss',
})
export class TableHeadTreeComponent {
  @Input({ required: true }) fieldName: string = 'Name';
  @Input({ required: true }) sortFeature: boolean = true;
  @Input() utils?: {
    index: number;
    dataLength: number;
    action: boolean;
    activeField: string;
  };
  @Output() sortOut: EventEmitter<{
    fieldName: string;
    sort: 'asc' | 'desc' | null;
  }> = new EventEmitter<{
    fieldName: string;
    sort: 'asc' | 'desc' | null;
  }>();

  align: 'start' | 'center' | 'end' = 'center';
  iconSort: Icon = 'sortable';
  sort: 'asc' | 'desc' | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (this.fieldName === '') {
        this.sortFeature = false;
      }
      if (this.utils) {
        if (this.utils.activeField) {
          if (this.fieldName !== this.utils.activeField) {
            this.iconSort = 'sortable';
            this.sort = null;
          }
        }
        if (this.utils.action) {
          this.utils.index === 0
            ? (this.align = 'start')
            : this.utils.index === this.utils.dataLength - 2
            ? (this.align = 'end')
            : (this.align = 'center');
        } else {
          this.utils.index === 0
            ? (this.align = 'start')
            : this.utils.index === this.utils.dataLength - 1
            ? (this.align = 'end')
            : (this.align = 'center');
        }
      }
    }
  }

  /** Toggle for sort */
  toggleSort(param: { fieldName: string; sort: 'asc' | 'desc' | null }): void {
    if (this.sort === param.sort) {
      this.sort = null;
      this.iconSort = 'sortable';
    } else {
      this.sort = param.sort;
      this.iconSort = param.sort === 'asc' ? 'sortAscending' : 'sortDescending';
    }
    this.sortOut.emit({ fieldName: param.fieldName, sort: this.sort });
  }
}
