import { Component } from '@angular/core';
import { ButtonIconComponent, LinkComponent } from 'fui';
// import { ButtonIconComponent, LinkComponent } from 'fui';

@Component({
  selector: 'app-link-view',
  standalone: true,
  imports: [LinkComponent, ButtonIconComponent],
  templateUrl: './link-view.component.html',
  styleUrl: './link-view.component.scss',
})
export class LinkViewComponent {
  disabled: boolean = false;

  toggleLink(): void {
    this.disabled = !this.disabled;
  }
}
