import { DataGridViewService } from './../data-grid-view/data-grid-view.service';
import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  FormControlLayoutComponent,
  IconsComponent,
  InputFieldComponent,
  SelectableComponent,
  SelectableDTO,
} from 'fui';
import { CommonModule } from '@angular/common';
import {
  debounceTime,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
} from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-selectable-view',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    SelectableComponent,
    ButtonIconComponent,
    FormControlLayoutComponent,
    IconsComponent,
    InputFieldComponent,
    ReactiveFormsModule,
  ],
  providers: [DataGridViewService],
  templateUrl: './selectable-view.component.html',
  styleUrl: './selectable-view.component.scss',
})
export class SelectableViewComponent {
  singleSelection: boolean = false;
  allowExclusions: boolean = false;
  filterOptions: boolean = true;
  options: SelectableDTO[] = [];

  dataSelected?: SelectableDTO[] | SelectableDTO;

  page: number = 0;
  limit: number = 10;
  totalItems: number = 0;
  loadingSearch: boolean = false;
  search: string = '';
  private _onDestroy$: Subject<Boolean> = new Subject<Boolean>();
  watch!: Subscription;
  searchForm: FormControl = new FormControl('');

  constructor(private readonly _dataGridViewService: DataGridViewService) {}

  ngOnInit(): void {
    this._gettingProducts(this.page, this.limit, this.search);
    this.watch = this.searchForm.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((search) =>
          this._gettingProducts(this.page, this.limit, search)
        ),
        takeUntil(this._onDestroy$)
      )
      .subscribe();
  }

  async _gettingProducts(
    page: number,
    limit: number,
    search: string
  ): Promise<void> {
    try {
      this._dataGridViewService
        .getProducts(page, limit, search)
        .pipe(
          switchMap((data) => {
            const reconData: SelectableDTO[] = [];
            this.totalItems = data.total;
            data.products.forEach((item) => {
              const dto: SelectableDTO = {
                label: item.title,
                value: {
                  price: item.price,
                  rate: item.rating,
                },
                onCheck: 'on',
              };
              reconData.push(dto);
            });
            return (this.options = reconData);
          }),
          takeUntil(this._onDestroy$)
        )
        .subscribe();
    } catch (error) {
      throw error;
    }
  }

  async showMore(): Promise<void> {
    try {
      this._dataGridViewService
        .getProducts(this.page + 10, this.limit, '')
        .pipe(
          switchMap((data) => {
            const reconData: SelectableDTO[] = [];
            this.totalItems = data.total;
            data.products.forEach((item) => {
              const dto: SelectableDTO = {
                label: item.title,
                value: {
                  price: item.price,
                  rate: item.rating,
                },
                description: item.description,
                onCheck: undefined,
              };
              reconData.push(dto);
            });
            this.page = this.page + 10;
            return (this.options = this.options.concat(reconData));
          }),
          takeUntil(this._onDestroy$)
        )
        .subscribe();
    } catch (error) {
      throw error;
    }
  }

  clickHandle(event: any): void {
    this.dataSelected = event;
  }

  switchModeSS(): void {
    this.options.forEach((item) => (item.onCheck = undefined));
    this.singleSelection = !this.singleSelection;
  }
  switchModeAE(): void {
    this.options.forEach((item) => (item.onCheck = undefined));
    this.allowExclusions = !this.allowExclusions;
  }
  switchModeFO(): void {
    this.filterOptions = !this.filterOptions;
  }
}
