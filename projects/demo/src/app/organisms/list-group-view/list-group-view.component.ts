import { Component } from '@angular/core';
import { ListGroupComponent } from '../../../../../fui/src/lib/organisms/list-group/list-group.component';
import { ListGroupItemComponent } from '../../../../../fui/src/lib/organisms/list-group/list-group-item/list-group-item.component';

@Component({
  selector: 'app-list-group-view',
  standalone: true,
  templateUrl: './list-group-view.component.html',
  styleUrl: './list-group-view.component.scss',
  imports: [ListGroupComponent, ListGroupItemComponent],
})
export class ListGroupViewComponent {}
