import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationComponent, TextComponent } from '../../../public-api';

@Component({
  selector: 'fui-table-tree',
  standalone: true,
  imports: [CommonModule, TextComponent, PaginationComponent],
  templateUrl: './table-tree.component.html',
  styleUrl: './table-tree.component.scss',
})
export class TableTreeComponent {
  @Input({ required: true }) limit: number = 10;
  @Input({ required: true }) totalItems: number = 100;
  @Input({ required: true }) showInfo: boolean = true;
  @Input() sizeInfo: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';
  @Input() info: string = 'Data';
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
