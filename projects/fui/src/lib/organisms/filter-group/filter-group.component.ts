import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FilterGroupButtonComponent } from './filter-group-button/filter-group-button.component';

@Component({
  selector: 'fui-filter-group',
  standalone: true,
  imports: [],
  templateUrl: './filter-group.component.html',
  styleUrl: './filter-group.component.scss',
})
export class FilterGroupComponent {
  @ContentChildren(FilterGroupButtonComponent)
  contentComponents!: QueryList<FilterGroupButtonComponent>;
  @Input() fullWidth: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.contentComponents.length > 0) {
        this.contentComponents.first.borderFirst = true;
        this.contentComponents.last.borderLast = true;

        this.contentComponents.forEach((item, i) => {
          if (this.fullWidth) {
            item.fullWidth = true;
          }
          if (item.withNext && i < this.contentComponents.length - 1) {
            this.contentComponents.toArray()[i + 1].withBefore = true;
          }
        });
      }
    }, 0);
  }
}
