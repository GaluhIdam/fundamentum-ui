import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import {
  ContextMenuItemProps,
  ContextMenuProps,
  PopoverConfigProps,
} from '../../types';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { ContextMenuItemComponent } from './context-menu-item/context-menu-item.component';

/**
 * The ContextMenuComponent
 * @usage
 * ```html
 * <fui-context-menu
 *  [data]="dataContextMenu"
 *  [contextMenuConfig]="{
 *   popoverPadding: 's',
 *  }"
 *  (onClickItem)="handleOnClickItem($event)"
 * > </fui-context-menu>
 * ```
 * <example-url>http://localhost:4200/templates/context-menu</example-url>
 */

@Component({
  selector: 'fui-context-menu',
  standalone: true,
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss',
  imports: [
    CommonModule,
    PopoverComponent,
    IconsComponent,
    TextComponent,
    TooltipComponent,
  ],
})
export class ContextMenuComponent {
  @Input() contextMenuConfig: PopoverConfigProps = {};
  @Input() data!: ContextMenuProps;
  @Output() onClickItem: EventEmitter<ContextMenuItemProps> =
    new EventEmitter();
  @Output() onClickFooterContextMenu: EventEmitter<void> = new EventEmitter();

  @ViewChild('contextMenuContainer')
  contextMenuContainer!: ElementRef;

  @ContentChildren(ContextMenuItemComponent)
  contextItems!: QueryList<ContextMenuItemComponent>;

  isDisplayContextMenu: boolean = false;
  displayContextMenu!: ContextMenuProps;
  historyItemMenu: ContextMenuProps[] = [];

  activeItemId!: string;

  isAnimateSlideLeft: boolean = false;
  isAnimateSlideRight: boolean = false;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      if (
        this.hasAncestorWithClass(clickedElement, 'context-menu-item') ||
        this.hasAncestorWithClass(clickedElement, 'context-menu-outer')
      ) {
        return;
      }
      setTimeout(() => {
        this.initialValueContextMenu();
      }, 800);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      const container = this.contextMenuContainer.nativeElement;
      const focusableElements = container.querySelectorAll(
        '.popover-header, .context-menu-outer:not(.context-menu-outer-disabled)'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    }
  }

  constructor(private elementRef: ElementRef) {}

  hasAncestorWithClass(
    element: HTMLElement | null,
    className: string
  ): boolean {
    while (element) {
      if (element.classList && element.classList.contains(className)) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }

  ngOnChanges() {
    this.initialValueContextMenu();
  }

  initialValueContextMenu() {
    if (this.data) {
      this.displayContextMenu = this.data;
    }
    if (this.data?.title) {
      this.contextMenuConfig.displayHeader = true;
      this.contextMenuConfig.headerTitle = this.data?.title;
    }

    this.historyItemMenu = [];
    this.contextMenuConfig.displayHeaderIcon = this.historyItemMenu.length > 0;
  }

  handleDisplayContextMenu(item: ContextMenuProps) {
    this.displayContextMenu = item;
    this.contextMenuConfig.headerTitle = item.title ? item.title : '';
  }

  onHandleClickItem(data: ContextMenuProps, item: ContextMenuItemProps) {
    this.activeItemId = item.id;
    this.onClickItem.emit(item);
    const children = item.children;

    if (children && Object.keys(children).length !== 0) {
      this.handleDisplayContextMenu(children);
      if ((children.items && children.items.length > 0) || !children.isMenu) {
        this.historyItemMenu.push(data);
        this.contextMenuConfig.displayHeaderIcon =
          this.historyItemMenu.length > 0;
      }
      this.setAnimationSlideLeft();
    }

    if (item.closeAfterClick) {
      this.isDisplayContextMenu = false;
    }

    if (item.isLink) {
      const url = item?.linkHref;
      const target = item?.linkTarget;
      window.open(url, target);
    }

    if (item.action) {
      item.action();
    }

    this.renderActiveContent();

    const container = this.contextMenuContainer.nativeElement;
    const focusableElements = container.querySelectorAll(
      '.popover-header, .context-menu-outer:not(.context-menu-outer-disabled)'
    );
    focusableElements.forEach((item: HTMLElement, index: number) => {
      if (index === 0) {
        item.focus();
      }
    });
  }

  getValueIsPopoverDisplay(isDisplay: boolean) {
    this.isDisplayContextMenu = isDisplay;
  }

  handleBackContextMenu() {
    if (this.historyItemMenu.length > 0) {
      this.handleDisplayContextMenu(
        this.historyItemMenu[this.historyItemMenu.length - 1]
      );
      this.historyItemMenu.pop();
      this.contextMenuConfig.displayHeaderIcon =
        this.historyItemMenu.length > 0 ? true : false;

      this.setAnimationSlideRight();
    }
  }

  handleClickFooterContextMenu() {
    this.onClickFooterContextMenu.emit();
  }

  renderActiveContent() {
    this.contextItems.forEach((item) => {
      if (this.activeItemId) {
        if (item.id === this.activeItemId) {
          item.isDisplay = true;
        } else {
          item.isDisplay = false;
        }
      }
    });
  }

  setAnimationSlideLeft() {
    this.isAnimateSlideLeft = true;
    setTimeout(() => {
      this.isAnimateSlideLeft = false;
    }, 250); //value time here should be same value with context menu animation in scss style
  }

  setAnimationSlideRight() {
    this.isAnimateSlideRight = true;
    setTimeout(() => {
      this.isAnimateSlideRight = false;
    }, 250); //value time here should be same value with context menu animation in scss style
  }
}
