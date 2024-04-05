import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../../atoms/button-empty/button-empty.component';
import { CommonModule } from '@angular/common';
import { Color, Size } from '../../../types';
import { FlyoutComponent } from '../flyout.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fui-flyout-footer',
  standalone: true,
  templateUrl: './flyout-footer.component.html',
  styleUrl: './flyout-footer.component.scss',
  imports: [CommonModule, ButtonComponent, ButtonEmptyComponent],
})
export class FlyoutFooterComponent {
  @Input() isFlyoutFooterCustom: boolean = false;
  @Input() flyoutFooterButtonPosition: 'start' | 'center' | 'end' = 'end';
  @Input() reverseButtonPosition: boolean = false;
  @Input() splitButton: 'between' | 'evenly' | 'around' | 'none' = 'none';
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

  onHandleCancelButton() {
    this.onCancelButton.emit();
  }

  onHandleConfirmButton() {
    this.onConfirmButton.emit();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
