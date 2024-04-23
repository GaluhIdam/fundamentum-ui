import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../../atoms/button-empty/button-empty.component';
import { Color, Size } from '../../../types';

/**
 * The ModalFooterComponent
 * @usage
 * ```html
 * <fui-modal-footer [isCustomModalFooter]="true">
 *  Content
 * </fui-modal-footer>
 * ```
 * <example-url>http://localhost:4200/templates/modal</example-url>
 */
@Component({
  selector: 'fui-modal-footer',
  standalone: true,
  templateUrl: './modal-footer.component.html',
  styleUrl: './modal-footer.component.scss',
  imports: [CommonModule, ButtonComponent, ButtonEmptyComponent],
})
export class ModalFooterComponent {
  @Input() isCustomModalFooter: boolean = false;
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
  @Output() onCancelButton: EventEmitter<void> = new EventEmitter();
  @Output() onConfirmButton: EventEmitter<void> = new EventEmitter();

  onHandleCancelButton() {
    this.onCancelButton.emit();
  }

  onHandleConfirmButton() {
    this.onConfirmButton.emit();
  }
}
