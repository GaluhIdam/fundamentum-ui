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
  padding: 'none' | 's' | 'm' | 'l' = 'm';
  subs!: Subscription;

  constructor(private FlyoutComponent: FlyoutComponent) {}

  ngOnInit() {
    this.subs = this.FlyoutComponent.flyoutPadding$.subscribe({
      next: (value: 'none' | 's' | 'm' | 'l') => {
        this.padding = value;
      },
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
