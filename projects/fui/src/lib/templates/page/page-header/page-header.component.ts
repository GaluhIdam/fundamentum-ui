import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * The PageHeaderComponent
 * @usage
 * ```html
 * <fui-page-header [extendedBorder]="isExtendedBorder" [padding]="'m'">
 *  Content
 * </fui-page-header>
 * ```
 * <example-url>http://localhost:4200/templates/page</example-url>
 */
@Component({
  selector: 'fui-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() extendedBorder: boolean = true;
  @Input() isBorder: boolean = true;
}
