import { Component } from '@angular/core';
import { ButtonComponent, LoadingComponent } from 'fui';

@Component({
  selector: 'app-loading-view',
  standalone: true,
  templateUrl: './loading-view.component.html',
  styleUrl: './loading-view.component.scss',
  imports: [LoadingComponent, ButtonComponent],
})
export class LoadingViewComponent {
  isLoadingSpinner = false;

  showLoadingSpinner() {
    this.isLoadingSpinner = true;
    setTimeout(() => {
      this.isLoadingSpinner = false;
    }, 3000);
  }
}
