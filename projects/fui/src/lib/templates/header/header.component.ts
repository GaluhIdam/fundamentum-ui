import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() fixed: 'fixed-top' | 'fixed-bottom' | 'none' = 'fixed-top';
  @Input() bgMode: 'bg-dark' | 'bg-light' = 'bg-dark';
}
