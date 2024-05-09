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

@Component({
  selector: 'fui-data-grid-v2',
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
  templateUrl: './data-grid-v2.component.html',
  styleUrl: './data-grid-v2.component.scss',
})
export class DataGridV2Component {
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
  @Output() searchPerField: EventEmitter<object> = new EventEmitter();
  @Output() sortPerField: EventEmitter<object> = new EventEmitter();

  /** Display Config */
  fullScreen: boolean = false;
  textAlign: 'left' | 'center' | 'right' = 'left';

  /** Columns Config */
  columnVisibility: { [key: string]: boolean } = {};
  searchColumns: FormControl = new FormControl('');
  visibleColumns: string[] = [];

  /** Search per Field */
  searchField: FormControl = new FormControl('');
  fieldSelector: string = '';

  @ViewChild('dataGridElement', { static: false }) dataGridElement!: ElementRef;
  heightGrid: number = 0;

  /** Observable data changed */
  obs!: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.obs = this.searchField.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data) => {
        this.searchPerField.emit({ search: data, field: this.fieldSelector });
      });
  }

  ngAfterViewChecked(): void {
    if (this.dataGridElement) {
      this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
      this._insertObjToColumnVisibility();
      this._updateVisibleColumns();
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

  changeOption(density: 'normal' | 'compact' | 'expanded'): void {
    this.density = density;
  }

  changeHeight(rowHeight: 'single' | 'autoFit'): void {
    this.rowHeight = rowHeight;
  }

  changeFullScreen(): void {
    this.fullScreen = !this.fullScreen;
  }

  onPageChange(event: { page: number; itemsPerPage: number }): void {
    this.limit = event.itemsPerPage;
    this.onPageChanges.emit({
      page: event.page,
      itemsPerPage: this.limit,
    });
  }

  protected _getObjectKeys(obj: any): string[] {
    if (obj && typeof obj === 'object') {
      return Object.keys(obj);
    } else {
      return [];
    }
  }

  protected _insertObjToColumnVisibility(): void {
    if (this.data && this.data.length > 0) {
      const keys = Object.keys(this.data[0]);

      keys.forEach((key) => {
        this.columnVisibility[key] = true;
      });
    }
  }

  toggleColumn(key: string): void {
    console.log(this.columnVisibility);
    this.columnVisibility[key] = !this.columnVisibility[key];
  }

  isColumnVisible(key: string): boolean {
    return this.columnVisibility[key] !== false;
  }

  toggleActionClick(obj: object): void {
    this.toggleAction.emit(obj);
  }

  protected _updateVisibleColumns(): void {
    const searchTerm = this.searchColumns.value.toLowerCase();
    this.visibleColumns = this._getObjectKeys(this.data[0]).filter((key) =>
      key.toLowerCase().includes(searchTerm)
    );
  }

  isButtonVisible(key: string): boolean {
    return this.visibleColumns.includes(key);
  }

  searchByField(field: string): void {
    this.fieldSelector = field;
  }

  sortByField(sort: 'asc' | 'desc', field: string): void {
    this.sortPerField.emit({ sort: sort, field: field });
  }
}
