import { Component } from '@angular/core';
import {
  ListGroupComponent,
  ListGroupItemComponent,
  ListGroupItemProps,
  ListGroupPinnableComponent,
} from 'fui';

@Component({
  selector: 'app-list-group-view',
  standalone: true,
  templateUrl: './list-group-view.component.html',
  styleUrl: './list-group-view.component.scss',
  imports: [
    ListGroupComponent,
    ListGroupItemComponent,
    ListGroupPinnableComponent,
  ],
})
export class ListGroupViewComponent {
  handleOnclickItem(item: ListGroupItemProps) {
    console.log('clicked item', item);
  }
  handleOnclickItemPin(item: ListGroupItemProps) {
    console.log('clicked item pin', item);
  }
}
