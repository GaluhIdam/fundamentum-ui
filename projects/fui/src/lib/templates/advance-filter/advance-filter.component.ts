import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import {
  AdvanceFilterSectionComponent,
  ButtonIconComponent,
  IconsComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  TextComponent,
} from '../../../public-api';

@Component({
  selector: 'fui-advance-filter',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    TextComponent,
    IconsComponent,
    ButtonIconComponent,
  ],
  templateUrl: './advance-filter.component.html',
  styleUrl: './advance-filter.component.scss',
})
export class AdvanceFilterComponent {
  @Input({ required: true }) openFilter: boolean = false;
  @Input() title: string = 'Advance Filter';
  @Output() actionOut: EventEmitter<boolean | 'filter' | 'clear'> =
    new EventEmitter<boolean | 'filter' | 'clear'>();

  @ContentChildren(AdvanceFilterSectionComponent)
  contentComponent!: QueryList<AdvanceFilterSectionComponent>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.checkLengthFilter();
    }, 100);
  }

  /** Toggle Open/Close Modal */
  toggleOpenClose(param: boolean | 'filter' | 'clear'): void {
    if (param === true || param === false) {
      this.openFilter = param;
      this.actionOut.emit(param);
    } else {
      this.actionOut.emit(param);
    }
  }

  /** If filter more than 5 will collapsed, but less than 5 will showed */
  checkLengthFilter(): void {
    if (this.contentComponent.length > 0) {
      this.contentComponent.forEach((item) => {
        if (item.contentComponent.length > 0) {
          if (
            item.contentComponent.length * this.contentComponent.length <=
            5
          ) {
            item.contentComponent.forEach(
              (subitem) => (subitem.showHide = true)
            );
          } else {
            item.contentComponent.forEach(
              (subitem) => (subitem.showHide = false)
            );
          }
        }
      });
    }
  }
}
