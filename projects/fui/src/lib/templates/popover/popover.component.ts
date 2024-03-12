import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { TextComponent } from '../../atoms/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { IconsComponent } from '../../atoms/icons/icons.component';

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
  @Input() footerType: 'text' | 'button' = 'text';
  @Input() footerText: string = '';
  @Input() footerSize: Size = 'sizes';
  @Input() footerButtonType: 'button' | 'button-empty' = 'button';
  @Input() footerButtonText: string = '';
  @Input() footerButtonColor: Color = 'primary';
  @Output() onClickHeaderPopover: EventEmitter<void> = new EventEmitter();
  @Output() onClickFooterPopover: EventEmitter<void> = new EventEmitter();
  @ViewChild('clickablePopover') clickablePopover!: ElementRef;
  @ViewChild('clickablePopoverContent') clickablePopoverContent!: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (
      !this.clickablePopover?.nativeElement?.contains(event?.target) &&
      !this.clickablePopoverContent?.nativeElement?.contains(event?.target)
    ) {
      this.displayPopover = false;
    }
  }

  onHandleDisplayPopover() {
    this.displayPopover = !this.displayPopover;
  }

  onHandleClikHeader() {
    this.onClickHeaderPopover.emit();
  }

  onHandleClikFooterButton() {
    this.onClickFooterPopover.emit();
  }
}
