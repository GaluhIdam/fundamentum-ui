import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../fui/src/lib/atoms/button/button.component';
import { ModalComponent } from '../../../../../fui/src/lib/templates/modal/modal.component';

@Component({
  selector: 'app-modal-view',
  standalone: true,
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.scss',
  imports: [ButtonComponent, ModalComponent],
})
export class ModalViewComponent {
  isModalOpen: boolean = false;
  isModalDeleteOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  handleCloseModal() {
    this.isModalOpen = false;
  }

  handleCancelModal() {
    this.isModalOpen = false;
  }

  handleConfirmButton() {
    this.isModalOpen = false;
  }

  openModalDelete() {
    this.isModalDeleteOpen = true;
  }

  handleCloseModalDelete() {
    this.isModalDeleteOpen = false;
  }

  handleCancelModalDelete() {
    this.isModalDeleteOpen = false;
  }

  handleConfirmButtonModalDelete() {
    this.isModalDeleteOpen = false;
  }
}
