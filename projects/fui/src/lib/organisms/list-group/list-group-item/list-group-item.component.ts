import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Icon, ListGroupItemProps } from '../../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../../atoms/icons/icons.component';
import { TextComponent } from '../../../atoms/text/text.component';
import { TooltipComponent } from '../../../templates/tooltip/tooltip.component';

@Component({
  selector: 'fui-list-group-item',
  standalone: true,
  templateUrl: './list-group-item.component.html',
  styleUrl: './list-group-item.component.scss',
  imports: [CommonModule, IconsComponent, TextComponent, TooltipComponent],
})
export class ListGroupItemComponent implements OnChanges {
  @Input() item: ListGroupItemProps = {
    id: '',
    itemLabel: {
      label: '',
      labelWrap: 'wrap',
      color: 'ink',
      size: 'sizedefault',
    },
    itemIcon: {
      color: 'ink',
      size: 'sizedefault',
    },
    isActive: false,
    isDisabled: false,
    isLink: false,
    extraAction: {
      pinnable: true,
      pinned: false,
      iconPinned: 'starFilled',
      iconUnpinned: 'starEmpty',
    },
  };
  @Output() onClickItem: EventEmitter<ListGroupItemProps> = new EventEmitter();
  @Output() onClickItemPin: EventEmitter<ListGroupItemProps> =
    new EventEmitter();

  isItemActive: boolean = false;
  isItemHover: boolean = false;
  isItemPinned: boolean = false;
  itemIconPinned: Icon = 'starFilled';
  itemIconUnpinned: Icon = 'starEmpty';

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      if (this.hasAncestorWithClass(clickedElement, 'list-group-item')) {
        return;
      }
      this.isItemActive = false;
    }
  }

  constructor(private elementRef: ElementRef) {}

  hasAncestorWithClass(
    element: HTMLElement | null,
    className: string
  ): boolean {
    while (element) {
      if (element.classList && element.classList.contains(className)) {
        if (element?.id === this.item.id) {
          return true;
        }
      }
      element = element.parentElement;
    }
    return false;
  }

  ngOnChanges() {
    this.isItemHover = this.item?.isActive ?? false;
    this.isItemActive = this.item?.isActive ?? false;
    this.isItemPinned = this.item?.extraAction?.pinned ?? false;
    this.itemIconPinned = this.item?.extraAction?.iconPinned
      ? this.item?.extraAction?.iconPinned
      : 'starFilled';
    this.itemIconUnpinned = this.item?.extraAction?.iconUnpinned
      ? this.item?.extraAction?.iconUnpinned
      : 'starEmpty';
  }

  handleClickItem() {
    if (!this.item.isDisabled) {
      this.isItemActive = true;
    }

    if (this.item.isLink && this.item?.itemLink?.href) {
      const url = this.item?.itemLink?.href;
      const target = this.item?.itemLink?.target;
      window.open(url, target);
    }
    const tempItem = {
      ...this.item,
      extraAction: { ...this.item?.extraAction, pinned: this.isItemPinned },
    };
    this.onClickItem.emit(tempItem);
  }

  handleMouseEnter() {
    if (!this.item.isDisabled) {
      this.isItemHover = true;
    }
  }
  handleMouseLeave() {
    if (!this.item.isDisabled) {
      this.isItemHover = false;
    }
  }

  handleClickItemPin() {
    if (
      !this.item?.extraAction?.isDisabled &&
      this.item?.extraAction?.pinnable
    ) {
      this.isItemPinned = !this.isItemPinned;
    }

    const tempItem = {
      ...this.item,
      extraAction: { ...this.item?.extraAction, pinned: this.isItemPinned },
    };
    this.onClickItemPin.emit(tempItem);
  }
}
