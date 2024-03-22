import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../../../atoms/text/text.component';
import { IconsComponent } from '../../../atoms/icons/icons.component';
import { Color, Icon, Size } from '../../../types';
import { FlyoutComponent } from '../flyout.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fui-flyout-header',
  standalone: true,
  templateUrl: './flyout-header.component.html',
  styleUrl: './flyout-header.component.scss',
  imports: [CommonModule, TextComponent, IconsComponent],
})
export class FlyoutHeaderComponent {
  @Input() iconClose: Icon = 'cross';
  @Input() iconCloseSize: Size = 'sizem';
  @Input() iconCloseColor!: Color;
  @Output() onCloseFlyout: EventEmitter<void> = new EventEmitter();

  padding: 'none' | 's' | 'm' | 'l' = 'm';
  subs!: Subscription;

  constructor(private FlyoutComponent: FlyoutComponent) {}

  ngOnInit() {
    this.subs = this.FlyoutComponent.flyoutPadding$.subscribe({
      next: (value: 'none' | 's' | 'm' | 'l') => {
        this.padding = value;
      },
    });
  }

  onHandleCloseFlyout() {
    this.onCloseFlyout.emit();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
