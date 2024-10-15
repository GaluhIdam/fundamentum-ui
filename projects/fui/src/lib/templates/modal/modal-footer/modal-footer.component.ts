import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * The ModalFooterComponent
 * @usage
 * ```html
 * <fui-modal-footer [isCustomModalFooter]="true">
 *  Content
 * </fui-modal-footer>
 * ```
 * <example-url>http://localhost:4200/templates/modal</example-url>
 */
@Component({
  selector: 'fui-modal-footer',
  standalone: true,
  templateUrl: './modal-footer.component.html',
  styleUrl: './modal-footer.component.scss',
  imports: [CommonModule],
})
export class ModalFooterComponent {}
