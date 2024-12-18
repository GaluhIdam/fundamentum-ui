import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TableHeadComponent } from './table-head/table-head.component';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'fui-table',
  standalone: true,
  imports: [CommonModule, TableHeadComponent, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true }) limit: number = 10;
  @Input({ required: true }) totalItems: number = 100;
  @Input() showInfo: boolean = true;
  @Input() pagination: boolean = true;
  @Output() onPageChanges: EventEmitter<{
    page: number;
    itemsPerPage: number;
  }> = new EventEmitter();
  heightGrid: number = 0;
  page: number = 1;

  /** Pagination Function */
  onPageChange(event: { page: number; itemsPerPage: number }): void {
    this.limit = event.itemsPerPage;
    this.page = event.page;
    this.onPageChanges.emit({
      page: event.page,
      itemsPerPage: this.limit,
    });
  }

  getRangeStart(): number {
    return (this.page - 1) * this.limit + 1;
  }

  getRangeEnd(): number {
    const end = this.page * this.limit;
    return end > this.totalItems ? this.totalItems : end;
  }
}
