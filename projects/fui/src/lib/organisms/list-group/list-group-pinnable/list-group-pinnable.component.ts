import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ListGroupComponent } from '../list-group.component';

/**
 * The ListGroupPinnableComponent
 * @usage
 * ```html
 * <fui-list-group-pinnable>
 *  <fui-list-group [isBordered]="true" [padding]="'none'">
 *   <fui-list-group-item></fui-list-group-item>
 *  </fui-list-group>
 * </fui-list-group-pinnable>
 * ```
 * <example-url>http://localhost:4200/organisms/list-group</example-url>
 */
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
