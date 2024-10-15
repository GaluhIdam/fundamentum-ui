import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsComponent } from '../../../atoms/icons/icons.component';
import { Color, Icon, Size } from '../../../types';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from '../../../../public-api';

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
  imports: [CommonModule, IconsComponent, ButtonIconComponent],
})
export class ModalHeaderComponent {
  @Input() iconCloseShow: boolean = true;
  @Input() iconClose: Icon = 'cross';
  @Input() iconCloseSize: Size = 'sizem';
  @Input() iconCloseColor: Color = 'ink';
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter();

  onHandleCloseModal() {
    this.onCloseModal.emit();
  }
}
