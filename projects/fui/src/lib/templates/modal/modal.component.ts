import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';
import {
  ButtonComponent,
  ButtonEmptyComponent,
  IconsComponent,
  OverlayMaskComponent,
  TextComponent,
} from 'fui';

@Component({
  selector: 'fui-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [
    CommonModule,
    IconsComponent,
    TextComponent,
    ButtonComponent,
    ButtonEmptyComponent,
    OverlayMaskComponent,
  ],
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Input() title: string = '';
  @Input() titleSize: Size = 'sizel';
  @Input() titleColor!: Color;
  @Input() iconClose: Icon = 'cross';
  @Input() iconCloseSize: Size = 'sizem';
  @Input() iconCloseColor!: Color;
  @Input() modalButtonPosition: 'start' | 'center' | 'end' = 'end';
  @Input() reverseButtonPosition: boolean = false;
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
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter();
  @Output() onCancelButton: EventEmitter<void> = new EventEmitter();
  @Output() onConfirmButton: EventEmitter<void> = new EventEmitter();
  @Output() onClickOverlayModal: EventEmitter<void> = new EventEmitter();

  onHandleCloseModal() {
    this.onCloseModal.emit();
  }

  onHandleCancelButton() {
    this.onCancelButton.emit();
  }

  onHandleConfirmButton() {
    this.onConfirmButton.emit();
  }

  onHandleOverLayClick() {
    this.onClickOverlayModal.emit();
  }
}
