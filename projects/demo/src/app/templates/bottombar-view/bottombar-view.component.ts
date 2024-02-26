import { Component } from '@angular/core';
import { BottombarComponent } from '../../../../../fui/src/lib/templates/bottombar/bottombar.component';
import { ButtonComponent } from '../../../../../fui/src/lib/atoms/button/button.component';

@Component({
  selector: 'app-bottombar-view',
  standalone: true,
  templateUrl: './bottombar-view.component.html',
  styleUrl: './bottombar-view.component.scss',
  imports: [BottombarComponent, ButtonComponent],
})
export class BottombarViewComponent {
  displayBottomBar: boolean = false;
  position: 'top' | 'bottom' = 'bottom';

  handleDisplayBotombar() {
    this.displayBottomBar = !this.displayBottomBar;
  }

  handleChangePositionBotombar() {
    this.position === 'bottom'
      ? (this.position = 'top')
      : (this.position = 'bottom');
  }

  handleCancelBottomBar() {
    this.displayBottomBar = false;
  }
}
