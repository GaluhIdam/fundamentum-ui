import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() position: 'fixed-top' | 'fixed-bottom' | 'none' = 'none';
  @Input() shadow: boolean = false;
}
