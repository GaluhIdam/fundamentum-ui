import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsComponent } from '../../../atoms/icons/icons.component';
import { Color, Icon, Size } from '../../../types';

/**
 * The ModalHeaderComponent
 * @usage
 * ```html
 * <fui-modal-header (onCloseModal)="handleCloseModal()">
 *  Content
 * </fui-modal-header>
 * ```
 * <example-url>http://localhost:4200/templates/modal</example-url>
 */
@Component({
  selector: 'fui-modal-header',
  standalone: true,
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.scss',
  imports: [IconsComponent],
})
export class ModalHeaderComponent {
  @Input() iconClose: Icon = 'cross';
  @Input() iconCloseSize: Size = 'sizem';
  @Input() iconCloseColor: Color = 'ink';
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter();

  onHandleCloseModal() {
    this.onCloseModal.emit();
  }
}
