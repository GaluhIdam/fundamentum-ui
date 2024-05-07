import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  ButtonIconComponent,
  IconsComponent,
  PaginationComponent,
  PopoverComponent,
} from '../../../public-api';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fui-data-grid',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent,
    ButtonIconComponent,
    PaginationComponent,
    PopoverComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss',
})
export class DataGridComponent {
  @Input({ required: true }) totalItems: number = 100;
  @Input({ required: true }) limit: number = 10;
  @Input({ required: true }) page: number = 1;
  @Input() loadingSearch: boolean = false;
  @Input() textFieldControl: FormControl = new FormControl('');
  @Output() optionChange = new EventEmitter<
    'normal' | 'compact' | 'expanded'
  >();
  @Output() heightChange = new EventEmitter<'single' | 'autoFit'>();
  @Output() onPageChanges: EventEmitter<{
    page: number;
    itemsPerPage: number;
  }> = new EventEmitter();
  @Output() refreshClicked: EventEmitter<any> = new EventEmitter<any>();

  density: 'compact' | 'normal' | 'expanded' = 'normal';
  rowHeight: 'single' | 'autoFit' = 'single';
  fullScreen: boolean = false;
  searchStatus: boolean = false;

  fullScreenAct(): void {
    this.fullScreen = !this.fullScreen;
  }

  changeOption(density: 'normal' | 'compact' | 'expanded'): void {
    this.density = density;
    this.optionChange.emit(density);
  }

  changeHeight(rowHeight: 'single' | 'autoFit'): void {
    this.rowHeight = rowHeight;
    this.heightChange.emit(rowHeight);
  }

  onEmitPageChange(): void {
    this.onPageChanges.emit({
      page: this.page,
      itemsPerPage: this.limit,
    });
  }

  onPageChange(event: { page: number; itemsPerPage: number }): void {
    this.page = event.page;
    this.limit = event.itemsPerPage;
    this.onPageChanges.emit({
      page: this.page,
      itemsPerPage: this.limit,
    });
  }

  changeSearch(): void {
    this.searchStatus = !this.searchStatus;
    this.textFieldControl.setValue('');
  }

  refreshOnClick(): void {
    this.refreshClicked.emit();
  }
}
