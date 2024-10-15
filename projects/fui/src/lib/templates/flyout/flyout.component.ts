import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';
import { OverlayMaskComponent } from '../../atoms/overlay-mask/overlay-mask.component';

/**
 * The FlyoutComponent
 * @usage
 * ```html
 * <fui-flyout
    [open]="isOpenFlyout"
    [flyoutSize]="flyoutSize"
    [flyoutPadding]="flyoutPaddingSize">
     <fui-flyout-header (onCloseFlyout)="handleCloseFlyout()">
      Content
     </fui-flyout-header>
     <fui-flyout-body>
      Content
     </fui-flyout-body>
     <fui-flyout-footer [isFlyoutFooterCustom]="true">
      Content
     </fui-flyout-footer>
 * </fui-flyout>
 * ```
 * <example-url>http://localhost:4200/templates/flyout</example-url>
 */

@Component({
  selector: 'fui-flyout',
  standalone: true,
  templateUrl: './flyout.component.html',
  styleUrl: './flyout.component.scss',

  imports: [
    CommonModule,
    TextComponent,
    IconsComponent,
    ButtonEmptyComponent,
    ButtonComponent,
    OverlayMaskComponent,
  ],
})
export class FlyoutComponent {
  @Input() openFlyout: boolean = false;
  @Input() withOverlay: boolean = true;
  @Input() size: 's' | 'm' | 'l' = 's';
  @Output() overlayOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  animation: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      setTimeout(() => {
        this.animation = this.openFlyout;
      }, 100);
    }
  }

  handleOverlayClick() {
    this.animation = false;
    setTimeout(() => {
      this.openFlyout = false;
      this.overlayOut.emit(false);
    }, 300);
  }
}
