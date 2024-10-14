import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent, LoadingBarComponent, LoadingComponent } from 'fui';

@Component({
  selector: 'app-loading-view',
  standalone: true,
  templateUrl: './loading-view.component.html',
  styleUrl: './loading-view.component.scss',
  imports: [CommonModule, LoadingComponent, ButtonComponent, LoadingBarComponent],
})
export class LoadingViewComponent {
  isLoadingSpinner = false;
  isLoadingProgress = false;

  showLoadingSpinner() {
    this.isLoadingSpinner = true;
    setTimeout(() => {
      this.isLoadingSpinner = false;
    }, 3000);
  }

  toggleLoadingBar(): void {
    this.isLoadingProgress = !this.isLoadingProgress;
    console.log('Loading finished!');
    console.log(this.isLoadingProgress);
  }
}
