import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  IconsComponent,
  LoadingBarComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  TextComponent,
} from 'fui';

@Component({
  selector: 'app-modal-view',
  standalone: true,
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.scss',
  imports: [
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    TextComponent,
    IconsComponent,
    ButtonIconComponent,
    LoadingBarComponent,
  ],
})
export class ModalViewComponent {
  isModalOpen: boolean = false;
  isModalCustomOpen: boolean = false;
  isModalAlertOpen: boolean = false;

  /** Toggle Modal */
  openModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }

  /** Toggle Modal Custom */
  openModalCustom(): void {
    this.isModalCustomOpen = !this.isModalCustomOpen;
  }

  /** Toggle Modal Custom */
  openModalAlert(event: boolean): void {
    this.isModalAlertOpen = event;
  }
}
