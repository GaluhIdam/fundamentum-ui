import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-page-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-sidebar.component.html',
  styleUrl: './page-sidebar.component.scss',
})
export class PageSidebarComponent {
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() width: number = 248;
}
