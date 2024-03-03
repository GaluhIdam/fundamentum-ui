import { Component } from '@angular/core';
import { LinkComponent } from 'fui';

@Component({
  selector: 'app-link-view',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './link-view.component.html',
  styleUrl: './link-view.component.scss',
})
export class LinkViewComponent {}
