import { Component } from '@angular/core';
import {
  BadgeComponent,
  LinkComponent,
  TableBodyComponent,
  TableBodyDataComponent,
  TableBodyRowComponent,
  TableComponent,
  TableHeadComponent,
} from '../../../../../fui/src/public-api';
import { DataGridViewService } from '../data-grid-view/data-grid-view.service';
import { ProductsDTO } from '../data-grid-view/products.dto';
import {
  debounceTime,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
} from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [
    TableComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableBodyDataComponent,
    TableBodyRowComponent,
    BadgeComponent,
    LinkComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
})
export class TableViewComponent {
  selectedDensity: string = 'normal';
  title: string[] = [
    'ID',
    'Title',
    'Description',
    'Price',
    'Discount Percentage',
    'Rating',
    'Stock',
    'Brand',
    'Category',
    'Thumbnail',
    'Images',
  ];
  selectedRowHeight: string = 'single';
  dataContent: ProductsDTO[] = [];
  content!: ProductsDTO;
  page: number = 0;
  limit: number = 10;
  totalItems: number = 0;
  loadingSearch: boolean = false;
  search: string = '';
  colorActive: 'primary' | 'danger' | 'warning' | 'success' | 'text' | 'blank' =
    'primary';
  activeSelect: boolean = false;

  private _onDestroy$: Subject<Boolean> = new Subject<Boolean>();
  watch!: Subscription;
  searchForm: FormControl = new FormControl('');

  isOpenFlyout: boolean = false;

  sortSearchReturn: {
    field: string;
    sortSearch: { sort: 'asc' | 'desc'; search: string };
  }[] = [];

  constructor(private readonly _dataGridViewService: DataGridViewService) {}

  ngOnInit(): void {
    this._gettingProducts(this.page - 1, this.limit, this.search);
    this.watch = this.searchForm.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((search) =>
          this._gettingProducts(this.page - 1, this.limit, search)
        ),
        takeUntil(this._onDestroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next(true);
    this._onDestroy$.unsubscribe();
  }

  /** Getting data from rest api */
  private async _gettingProducts(
    page: number,
    limit: number,
    search: string
  ): Promise<void> {
    try {
      this._dataGridViewService
        .getProducts(page, limit, search)
        .pipe(
          switchMap(
            (data) => (
              (this.loadingSearch = false),
              (this.totalItems = data.total),
              (this.dataContent = data.products)
            )
          ),
          takeUntil(this._onDestroy$)
        )
        .subscribe();
    } catch (error) {
      throw error;
    }
  }

  /** Refresh data and clear form */
  refresh(): void {
    this.searchForm.setValue('');
    this._gettingProducts(this.page - 1, this.limit, this.searchForm.value);
  }

  /** Handling For Option */
  handleOptionChange(density: string): void {
    this.selectedDensity = density;
  }

  /** Handling For Height */
  handleHeightChange(rowHeight: string): void {
    this.selectedRowHeight = rowHeight;
  }

  /** Handling For Pagination */
  changePagination(event: { page: number; itemsPerPage: number }): void {
    this._gettingProducts(event.page - 1, event.itemsPerPage, this.search);
  }

  /** Handling For Open Flyout */
  toggleOpen(event: ProductsDTO): void {
    this.content = event;
    this.isOpenFlyout = !this.isOpenFlyout;
  }
  /** Handling For Close Flyout */
  toggleClose(): void {
    this.isOpenFlyout = !this.isOpenFlyout;
  }

  /** Handling For Search PerField */
  sortSearchEmit(event: any): void {
    this.sortSearchReturn = event;
  }

  /** Handling For Pagination */
  onPageChanges(event: any): void {
    if (this.totalItems === event.itemsPerPage) {
      this.page = 0;
      this.limit = event.itemsPerPage;
      this._gettingProducts(this.page * this.limit, this.limit, this.search);
    } else {
      this.page = event.page - 1;
      this.limit = event.itemsPerPage;
      this._gettingProducts(this.page * this.limit, this.limit, this.search);
    }
  }
}
