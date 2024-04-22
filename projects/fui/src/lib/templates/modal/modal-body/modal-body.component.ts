import { Component } from '@angular/core';

/**
 * The ModalBodyComponent
 * @usage
 * ```html
 * <fui-modal-body (onCloseModal)="handleCloseModal()">
 *  Content
 * </fui-modal-body>
 * ```
 * <example-url>http://localhost:4200/templates/modal</example-url>
 */
@Component({
  selector: 'fui-modal-body',
  standalone: true,
  imports: [],
  templateUrl: './modal-body.component.html',
  styleUrl: './modal-body.component.scss',
})
export class ModalBodyComponent {}
