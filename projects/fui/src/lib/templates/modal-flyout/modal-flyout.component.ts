import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { TextComponent } from '../../atoms/text/text.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'fui-modal-flyout',
  standalone: true,
  templateUrl: './modal-flyout.component.html',
  styleUrl: './modal-flyout.component.scss',
  imports: [
    CommonModule,
    TextComponent,
    IconsComponent,
    ButtonEmptyComponent,
    ButtonComponent,
  ],
  animations: [
    trigger('slideInOut', [
      state('void', style({})),
      state(
        '*',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class ModalFlyoutComponent {
  @Input() open: boolean = false;
  @Input() title: string = '';
  @Input() titleSize: Size = 'sizel';
  @Input() titleColor!: Color;
  @Input() iconClose: Icon = 'cross';
  @Input() iconCloseSize: Size = 'sizem';
  @Input() iconCloseColor!: Color;
  @Input() modalButtonPosition: 'start' | 'center' | 'end' = 'end';
  @Input() reverseButtonPosition: boolean = false;
  @Input() splitButton: 'between' | 'evenly' | 'around' | 'none' = 'none';
  @Input() showConfirmButton: boolean = true;
  @Input() confirmButtonType: 'button' | 'button-empty' = 'button';
  @Input() confirmButtonText: string = 'Confirm';
  @Input() confirmButtonSize: Size = 'sizem';
  @Input() confirmButtonColor: Color = 'primary';
  @Input() showCancelButton: boolean = true;
  @Input() cancelButtonType: 'button' | 'button-empty' = 'button-empty';
  @Input() cancelButtonText: string = 'Cancel  ';
  @Input() cancelButtonSize: Size = 'sizem';
  @Input() cancelButtonColor: Color = 'primary';
  @Input() modalDirection: 'start' | 'end' = 'end';
  @Input() modalSize: 's' | 'm' | 'l' = 'm';
  @Input() modalPadding: 'none' | 's' | 'm' | 'l' = 'l';
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter();
  @Output() onCancelButton: EventEmitter<void> = new EventEmitter();
  @Output() onConfirmButton: EventEmitter<void> = new EventEmitter();

  onHandleCloseModal() {
    this.onCloseModal.emit();
  }

  onHandleCancelButton() {
    this.onCancelButton.emit();
  }

  onHandleConfirmButton() {
    this.onConfirmButton.emit();
  }
}
