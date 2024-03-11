import { Component } from '@angular/core';
import { ButtonComponent, ModalComponent } from 'fui';

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

  handleClickOverlay() {
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
