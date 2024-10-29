import { Component, Input } from '@angular/core';
import { TextComponent } from '../../../../public-api';

@Component({
  selector: 'fui-advance-filter-section',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './advance-filter-section.component.html',
  styleUrl: './advance-filter-section.component.scss',
})
export class AdvanceFilterSectionComponent {
  @Input({ required: true }) title: string = 'Section';
}
