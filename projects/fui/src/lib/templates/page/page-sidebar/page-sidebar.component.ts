import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * The PageSidebarComponent
 * @usage
 * ```html
 * <fui-page-sidebar>
 *  Content
 * </fui-page-sidebar>
 * ```
 * <example-url>http://localhost:4200/templates/page</example-url>
 */
@Component({
  selector: 'fui-page-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-sidebar.component.html',
  styleUrl: './page-sidebar.component.scss',
})
export class PageSidebarComponent {
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() width: number = 248;
  @Input() height: number = 0;
}
