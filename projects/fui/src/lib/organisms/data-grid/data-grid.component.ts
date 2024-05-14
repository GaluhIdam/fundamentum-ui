import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ButtonIconComponent,
  FormControlLayoutComponent,
  IconsComponent,
  InputFieldComponent,
  LinkComponent,
  PaginationComponent,
  PopoverComponent,
} from '../../../public-api';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

/**
 * The DataGridComponent
 * @usage
 * ```html
 * <fui-data-grid
     (toggleAction)="toggleOpen($event)"
     (onPageChanges)="onPageChanges($event)"
     (sortSearchEmit)="sortSearchEmit($event)"
     [title]="title"
     [data]="dataContent"
     [limit]="limit"
     [totalItems]="totalItems"
     [density]="'normal'"
     [rowHeight]="'single'">
 * </fui-data-grid>
 * ```
 * <example-url>http://localhost:4200/organisms/data-grid</example-url>
 */
@Component({
  selector: 'fui-data-grid',
  standalone: true,
  imports: [
    CommonModule,
    PopoverComponent,
    ButtonIconComponent,
    FormControlLayoutComponent,
    InputFieldComponent,
    LinkComponent,
    IconsComponent,
    ReactiveFormsModule,
    PaginationComponent,
  ],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss',
})
export class DataGridComponent {
  /** Input */
  @Input() data: object[] = [];
  @Input() title: string[] = [];
  @Input({ required: true }) totalItems: number = 100;
  @Input({ required: true }) limit: number = 10;
  @Input({ required: true }) density: 'compact' | 'normal' | 'expanded' =
    'normal';

  /** Output */
  @Input({ required: true }) rowHeight: 'single' | 'autoFit' = 'single';
  @Output() toggleAction: EventEmitter<object> = new EventEmitter();
  @Output() onPageChanges: EventEmitter<{
    page: number;
    itemsPerPage: number;
  }> = new EventEmitter();
  @Output() sortSearchEmit: EventEmitter<
    {
      field: string;
      sortSearch: { sort: 'asc' | 'desc'; search: string };
    }[]
  > = new EventEmitter();

  /** Display Config */
  @ViewChild('dataGridElement', { static: false }) dataGridElement!: ElementRef;
  heightGrid: number = 0;
  fullScreen: boolean = false;
  textAlign: 'left' | 'center' | 'right' = 'left';
  page: number = 1;

  /** Columns Config */
  columnVisibility: { [key: string]: boolean } = {};
  searchColumns: FormControl = new FormControl('');
  visibleColumns: string[] = [];

  /** Search per Field */
  searchField: FormControl = new FormControl('');
  fieldSelector: string = '';

  /** Observable data changed */
  obs!: Subscription;

  /** Sort & Search */
  sortSearch: {
    field: string;
    sortSearch: { sort: 'asc' | 'desc'; search: string };
  }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.obs = this.searchField.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.sortSearchEmit.emit(this.sortSearch);
      });
  }

  ngAfterViewChecked(): void {
    if (this.dataGridElement) {
      this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

  /** Trigger for Inserting Object and Checking */
  triggerColumns(): void {
    if (Object.keys(this.columnVisibility).length === 0) {
      this._insertObjToColumnVisibility();
    }
    this._searchColumns();
  }

  /** Trigger for Show All Columns */
  showAllColumns(): void {
    this.columnVisibility = {};
    Object.keys(this.data[0]).forEach((key) => {
      this.columnVisibility[key] = true;
    });
  }

  /** Trigger for Hide All Columns */
  hideAllColumns(): void {
    this.columnVisibility = {};
    Object.keys(this.data[0]).forEach((key) => {
      this.columnVisibility[key] = false;
    });
  }

  /** Trigger for reset to default density and row height */
  resetToDefault(): void {
    this.density = 'normal';
    this.rowHeight = 'single';
  }

  /** Trigger for action search and sort per field */
  actionSearchSort(field: string, sort: 'asc' | 'desc', search: string): void {
    const obj = {
      field: field,
      sortSearch: {
        sort: sort,
        search: search,
      },
    };
    const existingIndex = this.sortSearch.findIndex(
      (item) => item.field === field && item.sortSearch.search === search
    );

    if (existingIndex !== -1) {
      if (this.sortSearch[existingIndex].sortSearch.sort === sort) {
        this.sortSearch.splice(existingIndex, 1);
      } else {
        this.sortSearch[existingIndex].sortSearch.sort = sort;
      }
    } else {
      this.sortSearch.push(obj);
    }
    this.sortSearchEmit.emit(this.sortSearch);
  }

  /** Trigger for keyup search per field */
  keyupSearchSort(field: string, sort: 'asc' | 'desc', search: string): void {
    const obj: {
      field: string;
      sortSearch: { sort: 'asc' | 'desc'; search: string };
    } = {
      field: field,
      sortSearch: {
        sort: sort,
        search: search,
      },
    };
    if (this.sortSearch.length > 0) {
      this.sortSearch.forEach((item) => {
        if (item.field === field) {
          item.sortSearch.search = search;
        }
      });
    } else {
      this.sortSearch.push(obj);
    }
  }

  /** Insert Object For Table Head */
  protected _insertObjToColumnVisibility(): void {
    if (this.data.length > 0) {
      Object.keys(this.data[0]).forEach((key) => {
        this.columnVisibility[key] = true;
      });
    }
  }

  /** Search Column for Show/Hide */
  protected _searchColumns(): void {
    const searchTerm = this.searchColumns.value.toLowerCase();
    this.visibleColumns = this._getObjectKeys(this.data[0]).filter((key) =>
      key.toLowerCase().includes(searchTerm)
    );
  }

  /** Show Column when searching  */
  isButtonVisible(key: string): boolean {
    return this.visibleColumns.includes(key);
  }

  /** Toggle for Hide/Show Column */
  toggleColumn(key: string): void {
    this.columnVisibility[key] = !this.columnVisibility[key];
  }

  /** Checking Columns is Visible or Invisible */
  isColumnVisible(key: string): boolean {
    return this.columnVisibility[key] !== false;
  }

  /** Getting Object to be data */
  protected _getObjectKeys(obj: any): string[] {
    if (obj && typeof obj === 'object') {
      return Object.keys(obj);
    } else {
      return [];
    }
  }

  /** Handling for change option */
  changeOption(density: 'normal' | 'compact' | 'expanded'): void {
    this.density = density;
  }

  /** Handling for change height */
  changeHeight(rowHeight: 'single' | 'autoFit'): void {
    this.rowHeight = rowHeight;
  }

  /** Handling for change fullscreen */
  changeFullScreen(): void {
    this.fullScreen = !this.fullScreen;
  }

  /** Pagination Function */
  onPageChange(event: { page: number; itemsPerPage: number }): void {
    this.limit = event.itemsPerPage;
    this.page = event.page;
    this.onPageChanges.emit({
      page: event.page,
      itemsPerPage: this.limit,
    });
  }

  /** Parsing data to parent */
  toggleActionClick(obj: object): void {
    this.toggleAction.emit(obj);
  }

  /** Handling Range Page Start */
  getRangeStart(): number {
    return (this.page - 1) * this.limit + 1;
  }

  /** Handling Range Page End */
  getRangeEnd(): number {
    const end = this.page * this.limit;
    return end > this.totalItems ? this.totalItems : end;
  }
}
