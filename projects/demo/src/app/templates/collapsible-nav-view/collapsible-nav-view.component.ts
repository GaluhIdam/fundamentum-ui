import { Component } from '@angular/core';
import { ButtonIconComponent, CollapsibleNavComponent } from '../../../../../fui/src/public-api';
// import {
//   ButtonIconComponent,
//   CollapsibleNavComponent,
// } from 'fui';

@Component({
  selector: 'app-collapsible-nav-view',
  standalone: true,
  imports: [CollapsibleNavComponent, ButtonIconComponent],
  templateUrl: './collapsible-nav-view.component.html',
  styleUrl: './collapsible-nav-view.component.scss',
})
export class CollapsibleNavViewComponent {
  show: boolean = false;

  collapse(): void {
    this.show = !this.show;
  }
}
