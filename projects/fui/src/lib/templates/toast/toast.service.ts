import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastProps } from '../../types';

/**
 * The ToastService
 * @usage
 * ```typescript
 * toastService = inject(ToastService);
 * displayToast() {
 *  let toastObject: ToastProps = {
 *   position: 'bottom-right',
 *   header: {
 *    title: 'Title Toast',
 *   },
 *   body: {
 *    message: 'Message Toast',
 *   },
 *   duration: 3000,
 *   type = 'primary',
 *   };
 *  this.toastService.toast(toastObject);
 * }
 * ```
 */

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastMessageSource: BehaviorSubject<ToastProps> = new BehaviorSubject(
    {}
  );
  $toastMessages = this.toastMessageSource.asObservable();

  constructor() {}

  toast(toast: ToastProps) {
    if (toast) {
      const newToast = {
        ...toast,
        id: new Date().getTime().toString(),
        position: toast?.position ? toast?.position : 'bottom-right',
      };
      this.toastMessageSource.next(newToast);
    }
  }
}
