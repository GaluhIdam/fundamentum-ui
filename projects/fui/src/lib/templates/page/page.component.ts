import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';

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
  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';
  @Input() isGrow: boolean = true;
  @Input() isRestrictWidth: boolean = false;
}
