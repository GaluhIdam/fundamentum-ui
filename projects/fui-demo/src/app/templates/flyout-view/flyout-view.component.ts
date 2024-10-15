import { Component } from '@angular/core';
import {
  FlyoutBodyComponent,
  FlyoutComponent,
  FlyoutFooterComponent,
  FlyoutHeaderComponent,
  IconsComponent,
  TextComponent,
  ButtonIconComponent,
} from 'fui';

@Component({
  selector: 'app-modal-flyout-view',
  standalone: true,
  templateUrl: './flyout-view.component.html',
  styleUrl: './flyout-view.component.scss',
  imports: [
    FlyoutComponent,
    FlyoutHeaderComponent,
    FlyoutBodyComponent,
    FlyoutFooterComponent,
    TextComponent,
    IconsComponent,
    ButtonIconComponent,
  ],
})
export class FlyoutViewComponent {
  isOpenFlyout = false;
  isOpenFlyoutM = false;
  isOpenFlyoutL = false;

  /** Toggle Flyout */
  toggleFlyout(event: boolean): void {
    this.isOpenFlyout = event;
  }
  /** Toggle Flyout */
  toggleFlyoutM(event: boolean): void {
    this.isOpenFlyoutM = event;
  }
  /** Toggle Flyout */
  toggleFlyoutL(event: boolean): void {
    this.isOpenFlyoutL = event;
  }
}
