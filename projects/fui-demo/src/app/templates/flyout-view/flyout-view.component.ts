import { Component } from '@angular/core';
import {
  ButtonComponent,
  FlyoutBodyComponent,
  FlyoutComponent,
  FlyoutFooterComponent,
  FlyoutHeaderComponent,
  IconsComponent,
  SpacerComponent,
  TextComponent,
} from 'fui';

@Component({
  selector: 'app-modal-flyout-view',
  standalone: true,
  templateUrl: './flyout-view.component.html',
  styleUrl: './flyout-view.component.scss',
  imports: [
    FlyoutComponent,
    ButtonComponent,
    FlyoutHeaderComponent,
    TextComponent,
    FlyoutBodyComponent,
    FlyoutFooterComponent,
    SpacerComponent,
    IconsComponent,
  ],
})
export class FlyoutViewComponent {
  isOpenFlyout = false;
  flyoutSize: 's' | 'm' | 'l' = 'm';
  flyoutPaddingSize: 'none' | 's' | 'm' | 'l' = 'm';

  handleOpenFlyout() {
    this.isOpenFlyout = true;
  }

  handleCloseFlyout() {
    this.isOpenFlyout = false;
  }

  handleConfirmButton() {
    this.isOpenFlyout = false;
  }

  handleCancelButton() {
    this.isOpenFlyout = false;
  }

  changePaddingSize(size: 'none' | 's' | 'm' | 'l') {
    this.flyoutPaddingSize = size;
  }

  changeSize(size: 's' | 'm' | 'l') {
    this.flyoutSize = size;
  }
}
