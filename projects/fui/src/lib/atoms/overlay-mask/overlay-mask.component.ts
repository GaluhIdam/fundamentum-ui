import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Size } from '../../types';
import { CommonModule } from '@angular/common';

/**
 * The OverlayMaskComponent
 * @usage
 * ```html
 * <fui-overlay-mask
 *  (onOverlayClick)="onHandleOverLayClick()"
 * > Overlay Mask </fui-overlay-mask>
 * ```
 */

@Component({
  selector: 'fui-overlay-mask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay-mask.component.html',
  styleUrl: './overlay-mask.component.scss',
})
export class OverlayMaskComponent {
  @Input() isCenterContent: boolean = true;
  @Input() paddingSize: 's' | 'm' | 'l' = 'm';
  @Output() onOverlayClick: EventEmitter<void> = new EventEmitter();

  handleOverlayClick() {
    this.onOverlayClick.emit();
  }
}
