import { Component, inject } from '@angular/core';
import { ToastProps } from '../../types';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { TextComponent } from '../../atoms/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { ToastService } from './toast.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * The ToastComponent
 * @usage
 * ```html
 * <fui-toast></fui-toast>
 * ```
 * <example-url>http://localhost:4200/templates/toast</example-url>
 */

@Component({
  selector: 'fui-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  imports: [CommonModule, IconsComponent, TextComponent, ButtonComponent],
  animations: [
    trigger('toast', [
      state(
        'void',
        style({ transform: 'translateY(10px) scale(.9)', opacity: 0 })
      ),
      state('*', style({ transform: 'translateY(0) scale(1)', opacity: 1 })),
      transition('void <=> *', animate('300ms ease')),
    ]),
  ],
})
export class ToastComponent {
  toastService = inject(ToastService);
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' =
    'bottom-right';

  toastData: ToastProps[] = [];

  ngOnInit() {
    this.toastService.$toastMessages.subscribe({
      next: (value) => {
        if (value && Object.keys(value).length !== 0) {
          this.handleToastMessage(value);
          this.position = value.position ? value.position : 'bottom-right';
        }
      },
    });
  }

  handleToastMessage(toast: ToastProps) {
    if (toast?.position === 'top-left' || toast?.position === 'top-right') {
      this.toastData.unshift(toast);
    } else {
      this.toastData.push(toast);
    }
    const durationToast = toast.duration ? toast.duration : 3000;
    setTimeout(() => this.removeToastMessage(toast), durationToast);
  }

  removeToastMessage(toast: ToastProps) {
    const indexToastRemoved = this.toastData.findIndex(
      (t) => t.id === toast.id
    );
    if (indexToastRemoved > -1) {
      this.toastData.splice(indexToastRemoved, 1);
    }
  }

  handleActionFooterToast(toast: ToastProps) {
    if (toast.footer?.isActionDismiss) {
      this.removeToastMessage(toast);
    } else {
      if (toast.footer && toast.footer.action) {
        toast.footer.action();
      }
    }
  }
}
