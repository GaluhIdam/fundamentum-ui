import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-page-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-body.component.html',
  styleUrl: './page-body.component.scss',
})
export class PageBodyComponent {
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() isShadow: boolean = true;
}
