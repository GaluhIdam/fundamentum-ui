import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
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

  /** Toggle Open/Close Modal */
  toggleOpenClose(param: boolean | 'filter' | 'clear'): void {
    if (param === true || param === false) {
      this.openFilter = param;
      this.actionOut.emit(param);
    } else {
      this.actionOut.emit(param);
    }
  }
}
