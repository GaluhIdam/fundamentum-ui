import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() position: 'fixed-top' | 'fixed-bottom' | 'none' = 'none';
  @Input() shadow: boolean = false;
  @Input() display: 'flex' | 'block' = 'block';
  @Input() zIndex: number = 2;
}
