import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * The ModalComponent
 * @usage
 * ```html
 * <fui-modal
 *  [open]="isModalOpen"
 *  (onClickOverlayModal)="handleClickOverlay()">
 *   <fui-modal-header (onCloseModal)="handleCloseModal()">
 *    Content
 *   </fui-modal-header>
 *   <fui-modal-body (onCloseModal)="handleCloseModal()">
 *    Content
 *   </fui-modal-body>
 *   <fui-modal-footer [isCustomModalFooter]="true">
 *    Content
 *   </fui-modal-footer>
 * </fui-modal>
 * ```
 * <example-url>http://localhost:4200/templates/modal</example-url>
 */

@Component({
  selector: 'fui-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  imports: [CommonModule],
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Output() onClickOverlayModal: EventEmitter<void> = new EventEmitter();

  onHandleOverLayClick() {
    this.onClickOverlayModal.emit();
  }
}
