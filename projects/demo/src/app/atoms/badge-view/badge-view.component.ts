import { Component } from '@angular/core';
import { BadgeComponent } from 'fui';

@Component({
  selector: 'app-badge-view',
  standalone: true,
  templateUrl: './badge-view.component.html',
  styleUrl: './badge-view.component.scss',
  imports: [BadgeComponent],
})
export class BadgeViewComponent {}
