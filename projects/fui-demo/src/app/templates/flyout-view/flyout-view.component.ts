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
  flyoutSize: 's' | 'm' | 'l' = 'm';
  flyoutPaddingSize: 'none' | 's' | 'm' | 'l' = 'm';

  /** Toggle Flyout */
  toggleFlyout(event: boolean): void {
    this.isOpenFlyout = event;
  }
}
