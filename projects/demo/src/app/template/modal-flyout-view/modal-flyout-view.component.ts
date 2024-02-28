import { Component } from '@angular/core';
import { ModalFlyoutComponent } from '../../../../../fui/src/lib/templates/modal-flyout/modal-flyout.component';
import { ButtonComponent } from '../../../../../fui/src/lib/atoms/button/button.component';

@Component({
  selector: 'app-modal-flyout-view',
  standalone: true,
  templateUrl: './modal-flyout-view.component.html',
  styleUrl: './modal-flyout-view.component.scss',
  imports: [ModalFlyoutComponent, ButtonComponent],
})
export class ModalFlyoutViewComponent {
  isOpenModalFlyout = false;
  modalSize: 's' | 'm' | 'l' = 'm';
  modalPaddingSize: 'none' | 's' | 'm' | 'l' = 'm';

  handleOpenModal() {
    this.isOpenModalFlyout = true;
  }

  handleCloseModal() {
    this.isOpenModalFlyout = false;
  }

  handleConfirmButton() {
    this.isOpenModalFlyout = false;
  }

  handleCancelButton() {
    this.isOpenModalFlyout = false;
  }

  changePaddingSize(size: 'none' | 's' | 'm' | 'l') {
    this.modalPaddingSize = size;
  }

  changeSize(size: 's' | 'm' | 'l') {
    this.modalSize = size;
  }
}
