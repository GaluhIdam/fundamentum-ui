import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlyoutComponent } from '../flyout.component';
import { Subscription } from 'rxjs';

/**
 * The FlyoutBodyComponent
 * @usage
 * ```html
 * <fui-flyout-body>
 *  Content
 * </fui-flyout-body>
 * ```
 * <example-url>http://localhost:4200/templates/flyout</example-url>
 */
@Component({
  selector: 'fui-flyout-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flyout-body.component.html',
  styleUrl: './flyout-body.component.scss',
})
export class FlyoutBodyComponent {
}
