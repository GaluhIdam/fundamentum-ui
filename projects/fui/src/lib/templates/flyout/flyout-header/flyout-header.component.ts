import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../../../atoms/text/text.component';
import { Color, Icon, Size } from '../../../types';
import { FlyoutComponent } from '../flyout.component';
import { Subscription } from 'rxjs';
import { ButtonIconComponent } from '../../../../public-api';

/**
 * The FlyoutHeaderComponent
 * @usage
 * ```html
 * <fui-flyout-header (onCloseFlyout)="handleCloseFlyout()">
 *  Content
 * </fui-flyout-header>
 * ```
 * <example-url>http://localhost:4200/templates/flyout</example-url>
 */
@Component({
  selector: 'fui-flyout-header',
  standalone: true,
  templateUrl: './flyout-header.component.html',
  styleUrl: './flyout-header.component.scss',
  imports: [CommonModule, TextComponent, ButtonIconComponent],
})
export class FlyoutHeaderComponent {
  @Output() closeOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  onHandleCloseFlyout() {
    this.closeOut.emit(false);
  }
}
