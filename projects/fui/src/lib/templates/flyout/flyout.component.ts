import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { OverlayMaskComponent } from '../../atoms/overlay-mask/overlay-mask.component';

/**
 * The FlyoutComponent
 * @usage
 * ```html
 * <fui-flyout
    [open]="isOpenFlyout"
    [flyoutSize]="flyoutSize"
    [flyoutPadding]="flyoutPaddingSize">
     <fui-flyout-header (onCloseFlyout)="handleCloseFlyout()">
      Content
     </fui-flyout-header>
     <fui-flyout-body>
      Content
     </fui-flyout-body>
     <fui-flyout-footer [isFlyoutFooterCustom]="true">
      Content
     </fui-flyout-footer>
 * </fui-flyout>
 * ```
 * <example-url>http://localhost:4200/templates/flyout</example-url>
 */

@Component({
  selector: 'fui-flyout',
  standalone: true,
  templateUrl: './flyout.component.html',
  styleUrl: './flyout.component.scss',
  animations: [
    trigger('slideInOut', [
      state('void', style({})),
      state(
        '*',
        style({
          transform: 'translateX(0)',
        })
      ),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
  imports: [
    CommonModule,
    TextComponent,
    IconsComponent,
    ButtonEmptyComponent,
    ButtonComponent,
    OverlayMaskComponent,
  ],
})
export class FlyoutComponent {
  @Input() open: boolean = false;
  @Input() flyoutDirection: 'start' | 'end' = 'end';
  @Input() flyoutSize: 's' | 'm' | 'l' = 'm';
  @Input() flyoutPadding: 'none' | 's' | 'm' | 'l' = 'l';
  @Input() withOverlay: boolean = false;
  @Output() onOverlayClick: EventEmitter<void> = new EventEmitter();
  flyoutPadding$ = new BehaviorSubject<'none' | 's' | 'm' | 'l'>('l');

  ngOnChanges(changes: SimpleChanges) {
    if (changes['flyoutPadding']?.currentValue) {
      this.flyoutPadding$.next(changes['flyoutPadding']?.currentValue);
    }
  }

  handleOverlayClick() {
    this.onOverlayClick.emit();
  }
}