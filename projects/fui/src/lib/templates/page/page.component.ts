import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * The PageComponent
 * @usage
 * ```html
 * <fui-page
 *  [isGrow]="isGrow"
 *  [isRestrictWidth]="isRestrictWidth"
 *  [direction]="direction">
 *   <fui-page-sidebar>
 *    Content
 *   </fui-page-sidebar>
 *   <fui-page-body [padding]="'none'">
 *    <fui-page-header [extendedBorder]="isExtendedBorder" [padding]="'m'">
 *     Content
 *    </fui-page-header>
 *    <fui-page-section [extendedBorder]="isExtendedBorder" [padding]="'m'">
 *     Content
 *    </fui-page-section>
 *   </fui-page-body>
 * </fui-page>
 * ```
 * <example-url>http://localhost:4200/templates/page</example-url>
 */
@Component({
  selector: 'fui-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  @Input() direction: 'horzontal' | 'vertical' = 'horzontal';
  @Input() isGrow: boolean = true;
  @Input() isRestrictWidth: boolean = false;
}
