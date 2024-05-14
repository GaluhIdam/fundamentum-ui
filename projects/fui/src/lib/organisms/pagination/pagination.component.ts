import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { TextComponent } from '../../atoms/text/text.component';
import { Color, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from '../../templates/popover/popover.component';

interface Page {
  page?: number;
  text?: string;
  active: boolean;
}

/**
 * The PaginationComponent
 * @usage
 * ```html
 * <fui-pagination
 *  [totalItems]="100"
 * ></fui-pagination>
 * ```
 * <example-url>http://localhost:4200/organisms/pagination</example-url>
 */

@Component({
  selector: 'fui-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  imports: [
    CommonModule,
    IconsComponent,
    ButtonComponent,
    TextComponent,
    PopoverComponent,
  ],
})
export class PaginationComponent {
  @Input({ required: true }) totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() maxDisplayPage: number = 7;
  @Input() size: Size = 'sizem';
  @Input() activeColor: Color = 'primary';
  @Input() color: Color = 'text';
  @Input() paginationSpace: 'between' | 'evenly' | 'around' = 'between';
  @Input() showFirstLastButtons: boolean = true;
  @Input() showPageSizeOptions: boolean = true;
  @Output() onPageChange: EventEmitter<{ page: number; itemsPerPage: number }> =
    new EventEmitter();
  totalPages!: number;
  currentPage: number = 1;
  pages: number[] = [];
  visiblePages: Page[] = [];
  pageSizeOptionsValue: { size: number; label: string }[] = [];
  selectedSize: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    this.generatePages();
    this.generatePageSizeOption();
    this.cdr.detectChanges();
  }

  generatePageSizeOption() {
    const mappedSizeOption = this.pageSizeOptions.map((size: number) => {
      return { size: size, label: size.toString() };
    });
    const sizeAll: { size: number; label: string } = {
      size: this.totalItems,
      label: 'Show all',
    };
    this.pageSizeOptionsValue = [...mappedSizeOption, sizeAll];
    this.selectedSize = this.itemsPerPage.toString();
  }

  generatePages() {
    this.totalPages = this.totalItems / this.itemsPerPage;
    const pageNumbers: number[] = [];
    const activePage = this.currentPage;
    const totalPagesToShow = this.totalPages < 1 ? 1 : this.totalPages;

    let first = 1;
    let last = totalPagesToShow;

    const showEllipsis = totalPagesToShow > this.maxDisplayPage;

    for (let i = 1; i <= totalPagesToShow; i++) {
      if (
        i === first ||
        i === last ||
        activePage === i ||
        !showEllipsis ||
        activePage - 1 === i ||
        (activePage < Math.floor(this.maxDisplayPage / 2) + 1 &&
          i < this.maxDisplayPage) ||
        activePage + 1 === i ||
        (activePage > last - Math.floor(this.maxDisplayPage / 2) &&
          i > last - (this.maxDisplayPage - 1))
      ) {
        pageNumbers.push(i);
      }
    }

    this.visiblePages = pageNumbers.reduce(
      (result: any[], pageNumber: number, index: number) => {
        if (index > 0 && pageNumber !== pageNumbers[index - 1] + 1) {
          result.push({ text: '...', active: false });
        }
        result.push({ page: pageNumber, active: activePage === pageNumber });
        return result;
      },
      []
    );
  }

  goToFirstPage() {
    this.currentPage = 1;
  }

  goToLastPage() {
    this.currentPage = this.totalPages;
  }

  goToNextPage() {
    if (this.currentPage !== this.totalPages) {
      this.currentPage += 1;
    }
  }

  goToPreviousPage() {
    if (this.currentPage !== 1) {
      this.currentPage -= 1;
    }
  }

  goToPageNumber(number: number | undefined) {
    if (number) {
      this.currentPage = number;
    }
  }

  goToPage(page: string, number?: number | undefined) {
    switch (page) {
      case 'first':
        this.goToFirstPage();
        break;
      case 'last':
        this.goToLastPage();
        break;
      case 'next':
        this.goToNextPage();
        break;
      case 'previous':
        this.goToPreviousPage();
        break;
      case 'number':
        this.goToPageNumber(number);
        break;
      default:
        break;
    }

    this.onEmitPageChange();
  }

  selectSize(size: number, label: string) {
    this.itemsPerPage = size;
    this.selectedSize = label;
    if (this.itemsPerPage === this.totalItems) {
      this.currentPage = 1;
    }
    this.onEmitPageChange();
  }

  onEmitPageChange() {
    this.generatePages();
    this.onPageChange.emit({
      page: this.currentPage,
      itemsPerPage: this.itemsPerPage,
    });
  }
}
