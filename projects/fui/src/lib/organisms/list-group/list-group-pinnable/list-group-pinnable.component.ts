import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ListGroupComponent } from '../list-group.component';

@Component({
  selector: 'fui-list-group-pinnable',
  standalone: true,
  imports: [],
  templateUrl: './list-group-pinnable.component.html',
  styleUrl: './list-group-pinnable.component.scss',
})
export class ListGroupPinnableComponent implements AfterViewInit {
  @ContentChildren(ListGroupComponent)
  listGroup!: QueryList<ListGroupComponent>;

  ngAfterViewInit(): void {
    this.listGroup.forEach((item) => {
      item.isPinnable.next(true);
    });
  }
}
