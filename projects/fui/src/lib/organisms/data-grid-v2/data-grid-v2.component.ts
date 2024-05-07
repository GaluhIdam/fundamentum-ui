import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
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
import { ReactiveFormsModule } from '@angular/forms';

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
  @Input() data: object[] = [];
  @Input({ required: true }) totalItems: number = 100;
  @Input({ required: true }) limit: number = 10;
  @Input({ required: true }) page: number = 1;
  @Input({ required: true }) density: 'compact' | 'normal' | 'expanded' =
    'normal';
  @Input({ required: true }) rowHeight: 'single' | 'autoFit' = 'single';
  @Output() optionChange = new EventEmitter<
    'normal' | 'compact' | 'expanded'
  >();
  @Output() onPageChanges: EventEmitter<{
    page: number;
    itemsPerPage: number;
  }> = new EventEmitter();

  fullScreen: boolean = false;
  showColumns: { show: boolean; name: object }[] = [];
  textAlign: 'left' | 'center' | 'right' = 'left';
  columnVisibility: { [key: string]: boolean } = {};
  pageShow: boolean = false;

  @ViewChild('dataGridElement', { static: false }) dataGridElement!: ElementRef;
  heightGrid: number = 0;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.dataGridElement) {
        this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
        this.pageShow = true;
      }
    }, 1000);
  }

  changeOption(density: 'normal' | 'compact' | 'expanded'): void {
    this.density = density;
    this.pageShow = false;
    setTimeout(() => {
      if (this.dataGridElement) {
        this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
        this.pageShow = true;
      }
    }, 100);
  }

  changeHeight(rowHeight: 'single' | 'autoFit'): void {
    this.rowHeight = rowHeight;

    this.pageShow = false;
    setTimeout(() => {
      if (this.dataGridElement) {
        this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
        this.pageShow = true;
      }
    }, 100);
  }

  changeFullScreen(): void {
    this.fullScreen = !this.fullScreen;

    this.pageShow = false;
    setTimeout(() => {
      if (this.dataGridElement) {
        this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
        this.pageShow = true;
      }
    }, 100);
  }

  onPageChange(event: { page: number; itemsPerPage: number }): void {
    this.page = event.page;
    this.limit = event.itemsPerPage;
    this.onPageChanges.emit({
      page: this.page,
      itemsPerPage: this.limit,
    });

    this.pageShow = false;
    setTimeout(() => {
      if (this.dataGridElement) {
        this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
        this.pageShow = true;
      }
    }, 100);
  }

  protected _getObjectKeys(obj: any): string[] {
    if (obj && typeof obj === 'object') {
      this.showColumns.push({ show: true, name: obj });

      return Object.keys(obj);
    } else {
      return [];
    }
  }

  toggleColumn(key: string): void {
    this.columnVisibility[key] = !this.columnVisibility[key];

    this.pageShow = false;
    setTimeout(() => {
      if (this.dataGridElement) {
        this.heightGrid = this.dataGridElement.nativeElement.offsetHeight;
        this.pageShow = true;
      }
    }, 100);
  }

  isColumnVisible(key: string): boolean {
    return this.columnVisibility[key] !== false;
  }

}
