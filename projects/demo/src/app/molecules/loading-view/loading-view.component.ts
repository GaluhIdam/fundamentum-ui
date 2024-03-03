import { Component } from '@angular/core';
import { LoadingComponent } from 'fui';

@Component({
  selector: 'app-loading-view',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './loading-view.component.html',
  styleUrl: './loading-view.component.scss',
})
export class LoadingViewComponent {}
