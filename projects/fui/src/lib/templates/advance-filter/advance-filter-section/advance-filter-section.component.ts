import {
  Component,
  ContentChildren,
  Input,
  QueryList
} from '@angular/core';
import {
  AdvanceFilterItemComponent,
  TextComponent,
} from '../../../../public-api';

@Component({
  selector: 'fui-advance-filter-section',
  standalone: true,
  imports: [TextComponent],
  templateUrl: './advance-filter-section.component.html',
  styleUrl: './advance-filter-section.component.scss',
})
export class AdvanceFilterSectionComponent {
  @Input({ required: true }) title: string = 'Section';

  @ContentChildren(AdvanceFilterItemComponent)
  contentComponent!: QueryList<AdvanceFilterItemComponent>;
}
