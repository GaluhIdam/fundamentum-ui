import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { TextComponent } from '../../atoms/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { IconsComponent } from '../../atoms/icons/icons.component';

/**
 * The PopoverComponent
 * @usage
 * ```html
 * <fui-popover [position]="'top'">
    Popover
    <div popover-body>
     Popover Body
    </div>
 * </fui-popover>
 * ```
 * <example-url>http://localhost:4200/templates/popover</example-url>
 */

@Component({
  selector: 'fui-popover',
  standalone: true,
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  imports: [
    CommonModule,
    TextComponent,
    ButtonComponent,
    ButtonEmptyComponent,
    IconsComponent,
  ],
})
export class PopoverComponent {
  @Input() displayPopover: boolean = false;
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'bottom';
  @Input() align: 'start' | 'center' | 'end' = 'center';
  @Input() popoverRadius: 'none' | 's' | 'm' = 's';
  @Input() popoverPadding: 'none' | 's' | 'm' | 'l' = 's';
  @Input() displayHeader: boolean = false;
  @Input() displayHeaderIcon: boolean = false;
  @Input() headerIcon!: Icon;
  @Input() headerTitle: string = '';
  @Input() headerSize: Size = 'sizem';
  @Input() displayFooter: boolean = false;
  @Input() footerType: 'text' | 'button' | 'custom' = 'text';
  @Input() footerText: string = '';
  @Input() footerSize: Size = 'sizes';
  @Input() footerButtonType: 'button' | 'button-empty' = 'button';
  @Input() footerButtonText: string = '';
  @Input() footerButtonColor: Color = 'primary';
  @Input() isTour: boolean = false;
  @Output() onClickHeaderPopover: EventEmitter<void> = new EventEmitter();
  @Output() onClickFooterPopover: EventEmitter<void> = new EventEmitter();
  @Output() isPopoverDisplay: EventEmitter<boolean> = new EventEmitter(false);

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      if (
        this.hasAncestorWithClass(clickedElement, 'context-menu-item') ||
        this.hasAncestorWithClass(clickedElement, 'context-menu-outer')
      ) {
        return;
      }

      if (!this.isTour) {
        this.displayPopover = false;
        this.isPopoverDisplay.emit(this.displayPopover);
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

  onHandleDisplayPopover() {
    if (!this.isTour) {
      this.displayPopover = !this.displayPopover;
      this.isPopoverDisplay.emit(this.displayPopover);
    }
  }

  onHandleClikHeader() {
    this.onClickHeaderPopover.emit();
  }

  onHandleClikFooterButton() {
    this.onClickFooterPopover.emit();
  }
}
