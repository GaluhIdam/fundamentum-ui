import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IconsComponent, SelectableDTO } from '../../../public-api';

/**
 * The CalloutComponent component
 * @usage
 * ```html
 * <!-- Filter Option -->
 * <fui-form-control-layout *ngIf="filterOptions">
      <fui-input-field
        [formControlField]="searchForm"
        [type]="'text'"
        [size]="'m'"
        [placeholder]="'Filter Options'"
        [invalid]="false"
      >
        <fui-icons
          left-icon
          [label]="'left'"
          [icon]="'search'"
          [size]="'sizem'"
          [color]="'text'"
        />
      </fui-input-field>
   </fui-form-control-layout>
 * <!-- Selectable -->
 * <fui-selectable
      [totalData]="totalItems"
      [options]="options"
      [singleSelection]="singleSelection"
      [allowExclusions]="allowExclusions"
      (selectClick)="clickHandle($event)"
      (showMoreClick)="showMore()"
   />
 * ```
 * <example-url>http://localhost:4200/organisms/selectable</example-url>
 */
@Component({
  selector: 'fui-selectable',
  standalone: true,
  imports: [CommonModule, IconsComponent],
  templateUrl: './selectable.component.html',
  styleUrl: './selectable.component.scss',
})
export class SelectableComponent {
  @Input({ required: true }) options: SelectableDTO[] = [];
  @Input({ required: true }) singleSelection: boolean = true;
  @Input() allowExclusions: boolean = true;
  @Input() totalData: number = this.options.length;
  @Output() selectClick: EventEmitter<SelectableDTO | SelectableDTO[] | {}> =
    new EventEmitter<SelectableDTO | SelectableDTO[] | {}>();
  @Output() showMoreClick: EventEmitter<any> = new EventEmitter<any>();

  data: SelectableDTO[] = [];
  select: SelectableDTO | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['singleSelection'] || changes['allowExclusions']) {
      this.options.forEach((opt) => {
        opt.onCheck = undefined;
      });
      this.data = [];
    }
    if (changes['options']) {
      if (this.data.length > 0) {
        this.options.forEach((opt) => {
          this.data.forEach((item) => {
            if (opt.label === item.label && opt.onCheck !== item.onCheck) {
              opt.onCheck = item.onCheck;
            }
          });
        });
      } else {
        if (this.select) {
          this.options.forEach((opt) => {
            if (
              opt.label === this.select!.label &&
              opt.onCheck !== this.select!.onCheck
            ) {
              opt.onCheck = this.select!.onCheck;
            }
          });
        }
      }
    }
  }

  clickShowMore(): void {
    this.showMoreClick.emit();
  }

  clickHandle(item: SelectableDTO): void {
    /** If Single Selection TRUE & allowExclusions is FALSE */
    if (this.singleSelection && !this.allowExclusions) {
      this.options.forEach((opt) => {
        if (opt === item) {
          opt.onCheck = opt.onCheck !== undefined ? undefined : 'on';
          if (opt.onCheck !== undefined) {
            this.select = opt;
            this.selectClick.emit(this.select);
          } else {
            this.select = null;
            this.selectClick.emit();
          }
        } else {
          opt.onCheck = undefined;
        }
      });

      /** If Single Selection FALSE & allowExclusions is FALSE */
    } else if (!this.singleSelection && !this.allowExclusions) {
      const isEqual = (obj1: any, obj2: any) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
      };
      const index = this.data.findIndex((dataItem) => isEqual(dataItem, item));
      item.onCheck = item.onCheck !== undefined ? undefined : 'on';
      if (index !== -1) {
        if (item.onCheck === undefined) {
          this.data.splice(index, 1);
        } else {
          this.data[index] = item;
        }
      } else {
        this.data.push(item);
      }
      this.selectClick.emit(this.data);

      /** If Single Selection TRUE & allowExclusions is TRUE */
    } else if (this.singleSelection && this.allowExclusions) {
      this.options.forEach((opt) => {
        if (opt === item) {
          opt.onCheck =
            opt.onCheck === undefined
              ? 'on'
              : opt.onCheck === 'on'
              ? 'off'
              : undefined;
          if (opt.onCheck !== undefined) {
            this.select = opt;
            this.selectClick.emit(this.select);
          } else {
            this.select = null;
            this.selectClick.emit();
          }
        } else {
          opt.onCheck = undefined;
        }
      });

      /** If Single Selection FALSE & allowExclusions is TRUE */
    } else {
      const isEqual = (obj1: any, obj2: any) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
      };
      const index = this.data.findIndex((dataItem) => isEqual(dataItem, item));
      item.onCheck =
        item.onCheck === undefined
          ? 'on'
          : item.onCheck === 'on'
          ? 'off'
          : item.onCheck === 'off'
          ? undefined
          : undefined;

      if (index !== -1) {
        if (item.onCheck === undefined) {
          this.data.splice(index, 1);
        } else {
          this.data[index] = item;
        }
      } else {
        this.data.push(item);
      }
      this.selectClick.emit(this.data);
    }
  }
}
