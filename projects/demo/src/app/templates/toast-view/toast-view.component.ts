import { Component, inject } from '@angular/core';
import {
  ButtonComponent,
  Color,
  ToastComponent,
  ToastProps,
  ToastService,
} from 'fui';

@Component({
  selector: 'app-toast-view',
  standalone: true,
  templateUrl: './toast-view.component.html',
  styleUrl: './toast-view.component.scss',
  imports: [ToastComponent, ButtonComponent],
})
export class ToastViewComponent {
  toastService = inject(ToastService);

  handleNormalToast(type?: Color) {
    let toastObject: ToastProps = {
      position: 'bottom-right',
      header: {
        title: 'Normal Toast',
      },
      body: {
        message: 'Lorem ipsum dolor sit amet consectetur.',
      },
      duration: 3000,
    };
    if (type) {
      toastObject.type = type;
    }
    this.toastService.toast(toastObject);
  }

  handleIconToast(type?: Color) {
    let toastObject: ToastProps = {
      position: 'bottom-left',
      header: {
        title: 'Icon Toast',
        icon: 'faceHappy',
        colorIcon: 'warning',
      },
      body: {
        message: 'Lorem ipsum dolor sit amet consectetur.',
      },
      duration: 3000,
    };
    if (type) {
      toastObject.type = type;
    }
    this.toastService.toast(toastObject);
  }

  handleNormalFooterToast(type?: Color) {
    let toastObject: ToastProps = {
      position: 'top-left',
      header: {
        title: 'Normal Toast',
      },
      body: {
        message: 'Lorem ipsum dolor sit amet consectetur.',
      },
      footer: {
        text: 'Action',
      },
      duration: 3000,
    };
    if (type) {
      toastObject.type = type;
    }
    this.toastService.toast(toastObject);
  }

  handleIconFooterToast(type?: Color) {
    let toastObject: ToastProps = {
      position: 'top-right',
      header: {
        title: 'Icon Toast',
        icon: 'faceHappy',
        colorIcon: 'warning',
      },
      body: {
        message: 'Lorem ipsum dolor sit amet consectetur.',
      },
      footer: {
        text: 'Action',
      },
      duration: 3000,
    };
    if (type) {
      toastObject.type = type;
    }
    this.toastService.toast(toastObject);
  }

  handleNormalFooterDismissToast(type?: Color) {
    let toastObject: ToastProps = {
      header: {
        title: 'Normal Toast',
      },
      body: {
        message: 'Lorem ipsum dolor sit amet consectetur.',
      },
      footer: {
        text: 'Dismiss',
        isActionDismiss: true,
      },
      duration: 3000,
    };
    if (type) {
      toastObject.type = type;
    }
    this.toastService.toast(toastObject);
  }

  handleNormalFooterActionToast(type?: Color) {
    let toastObject: ToastProps = {
      header: {
        title: 'Normal Toast',
      },
      body: {
        message: 'Lorem ipsum dolor sit amet consectetur.',
      },
      footer: {
        text: 'Dismiss',
        action: () => {
          alert('Action Toast');
        },
      },
    };
    if (type) {
      toastObject.type = type;
    }
    this.toastService.toast(toastObject);
  }

  handleToastDanger() {
    this.toastService.toast({
      type: 'danger',
      header: {
        title: 'Title',
        icon: 'faceHappy',
      },
      body: {
        message: 'Lorem ipsum dolor sit amet consectetur.',
      },
      footer: {
        text: 'Dismiss',
        isActionDismiss: true,
      },
    });
  }
}
