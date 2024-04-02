import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() extendedBorder: boolean = true;
  @Input() isBorder: boolean = true;
}
