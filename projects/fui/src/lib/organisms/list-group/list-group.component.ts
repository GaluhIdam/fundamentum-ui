import { CommonModule } from '@angular/common';
import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ListGroupItemComponent } from './list-group-item/list-group-item.component';

@Component({
  selector: 'fui-list-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-group.component.html',
  styleUrl: './list-group.component.scss',
})
export class ListGroupComponent {
  @Input() isBordered: boolean = false;
  @Input() padding: 'flush' | 's' | 'm' | 'l' = 'm';

  @ContentChildren(ListGroupItemComponent)
  listGroupItems!: QueryList<ListGroupItemComponent>;

  isPinnable = new BehaviorSubject<boolean>(false);
  isPinnable$ = this.isPinnable.asObservable();
  subs!: Subscription;

  ngOnInit() {
    this.subs = this.isPinnable$.subscribe({
      next: (value) => {
        if (value) {
          setTimeout(() => {
            this.listGroupItems.forEach((item) => {
              item.itemIconPinned = 'pinFilled';
              item.itemIconUnpinned = 'pin';
            });
          }, 0);
        }
      },
    });
  }

  ngOnDestroy() {
    this.isPinnable.next(false);
    this.subs.unsubscribe();
  }
}
