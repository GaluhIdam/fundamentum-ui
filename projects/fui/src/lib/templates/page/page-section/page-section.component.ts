import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-page-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.scss',
})
export class PageSectionComponent {
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() extendedBorder: boolean = true;
  @Input() isBorder: boolean = true;
}
