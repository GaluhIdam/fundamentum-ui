import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * The PageBodyComponent
 * @usage
 * ```html
 * <fui-page-body [padding]="'none'">
 *  Content
 * </fui-page-body>
 * ```
 * <example-url>http://localhost:4200/templates/page</example-url>
 */
@Component({
  selector: 'fui-page-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-body.component.html',
  styleUrl: './page-body.component.scss',
})
export class PageBodyComponent {
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() isShadow: boolean = true;
}
