import { Component } from '@angular/core';
import { IconsComponent, PopoverComponent } from 'fui';

@Component({
  selector: 'app-popover-view',
  standalone: true,
  templateUrl: './popover-view.component.html',
  styleUrl: './popover-view.component.scss',
  imports: [PopoverComponent, IconsComponent],
})
export class PopoverViewComponent {
  isDisplayPopover: boolean = false;

  handleClickFooterClosePopover() {
    this.isDisplayPopover = false;
  }

  getValueIsPopoverDisplay(isDisplay: boolean) {
    this.isDisplayPopover = isDisplay;
  }
}
