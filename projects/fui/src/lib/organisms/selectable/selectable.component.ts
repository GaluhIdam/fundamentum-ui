import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IconsComponent, SelectableDTO } from '../../../public-api';

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
  @Output() selectClick: EventEmitter<SelectableDTO | SelectableDTO[] | {}> =
    new EventEmitter<SelectableDTO | SelectableDTO[] | {}>();

  data: SelectableDTO[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['singleSelection'] || changes['allowExclusions']) {
      this.options.forEach((opt) => {
        opt.onCheck = undefined;
      });
      this.data = [];
    }
  }

  clickHandle(item: SelectableDTO): void {
    /** If Single Selection TRUE & allowExclusions is FALSE */
    if (this.singleSelection && !this.allowExclusions) {
      this.options.forEach((opt) => {
        if (opt === item) {
          opt.onCheck = opt.onCheck !== undefined ? undefined : 'on';
          if (opt.onCheck !== undefined) {
            this.selectClick.emit(opt);
          } else {
            this.selectClick.emit({});
          }
        } else {
          opt.onCheck = undefined;
        }
      });
      /** If Single Selection FALSE & allowExclusions is FALSE */
    } else if (!this.singleSelection && !this.allowExclusions) {
      this.options.forEach((opt) => {
        if (opt === item) {
          opt.onCheck = opt.onCheck !== undefined ? undefined : 'on';
          if (opt.onCheck !== undefined) {
            this.data.push(opt);
            this.selectClick.emit(this.data);
          } else {
            const index = this.data.findIndex((dataItem) => dataItem === opt);
            if (index !== -1) {
              this.data.splice(index, 1);
            }
            this.selectClick.emit(this.data);
          }
        }
      });

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
            this.selectClick.emit(opt);
          } else {
            this.selectClick.emit({});
          }
        } else {
          opt.onCheck = undefined;
        }
      });
      /** If Single Selection FALSE & allowExclusions is TRUE */
    } else {
      this.options.forEach((opt) => {
        if (opt === item) {
          opt.onCheck =
            opt.onCheck === undefined
              ? 'on'
              : opt.onCheck === 'on'
              ? 'off'
              : undefined;
          const index = this.data.findIndex((dataItem) => dataItem === opt);
          if (opt.onCheck !== undefined && index === -1) {
            this.data.push(opt);
          } else if (opt.onCheck === undefined && index !== -1) {
            this.data.splice(index, 1);
          }
          this.selectClick.emit(this.data);
        }
      });
    }
  }
}
