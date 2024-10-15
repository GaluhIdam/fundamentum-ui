import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../../atoms/button-empty/button-empty.component';
import { CommonModule } from '@angular/common';
import { Color, Size } from '../../../types';
import { FlyoutComponent } from '../flyout.component';
import { Subscription } from 'rxjs';

/**
 * The FlyoutBodyComponent
 * @usage
 * ```html
 * <fui-flyout-footer [isFlyoutFooterCustom]="true">
 *  Content
 * </fui-flyout-footer>
 * ```
 * <example-url>http://localhost:4200/templates/flyout</example-url>
 */

@Component({
  selector: 'fui-flyout-footer',
  standalone: true,
  templateUrl: './flyout-footer.component.html',
  styleUrl: './flyout-footer.component.scss',
  imports: [CommonModule, ButtonComponent, ButtonEmptyComponent],
})
export class FlyoutFooterComponent {}
