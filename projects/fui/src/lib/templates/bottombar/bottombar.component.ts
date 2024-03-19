import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Size } from '../../types';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

/**
 * The BottombarComponent
 * @usage
 * ```html
 * <fui-bottombar
 *  [isDisplay]="true"
 *  (onConfirmButton)="handleConfirmBottomBar()"
 *  (onCancelButton)="handleCancelBottomBar()"
 * > BottomBar Content
 * </fui-bottombar>
 * ```
 */

@Component({
  selector: 'fui-bottombar',
  standalone: true,
  templateUrl: './bottombar.component.html',
  styleUrl: './bottombar.component.scss',
  imports: [CommonModule, ButtonComponent, ButtonEmptyComponent],
  animations: [
    trigger('slideInBottom', [
      transition(':enter', [
        style({ transform: 'translateY(200%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateY(200%)' })),
      ]),
    ]),
    trigger('slideInTop', [
      transition(':enter', [
        style({ transform: 'translateY(-200%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateY(-200%)' })),
      ]),
    ]),
  ],
})
export class BottombarComponent {
  @Input() isDisplay: boolean = false;
  @Input() position: 'top' | 'bottom' = 'bottom';
  @Input() buttonPosition: 'start' | 'end' = 'end';
  @Input() alignContentWithButton: 'start' | 'center' | 'end' = 'center';
  @Input() reverseButtonPosition: boolean = false;
  @Input() showConfirmButton: boolean = true;
  @Input() confirmButtonType: 'button' | 'button-empty' = 'button';
  @Input() confirmButtonText: string = 'Confirm';
  @Input() confirmButtonSize: Size = 'sizem';
  @Input() confirmButtonColor: Color = 'primary';
  @Input() showCancelButton: boolean = true;
  @Input() cancelButtonType: 'button' | 'button-empty' = 'button-empty';
  @Input() cancelButtonText: string = 'Cancel  ';
  @Input() cancelButtonSize: Size = 'sizem';
  @Input() cancelButtonColor: Color = 'primary';
  @Output() onCancelButton: EventEmitter<void> = new EventEmitter();
  @Output() onConfirmButton: EventEmitter<void> = new EventEmitter();

  get bottomBarClasses(): string[] {
    return [
      'bottombar',
      'bottombar-' + this.position,
      'alignContentWithButton-' + this.alignContentWithButton,
      'buttonPosition-' + this.buttonPosition,
    ];
  }

  onHandleCancelButton() {
    this.onCancelButton.emit();
  }

  onHandleConfirmButton() {
    this.onConfirmButton.emit();
  }
}
