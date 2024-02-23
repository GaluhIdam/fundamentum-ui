import { Component } from '@angular/core';
import { ButtonComponent, ButtonIconComponent } from '../../../../../fui/src/public-api';

@Component({
  selector: 'app-button-icon-view',
  standalone: true,
  imports: [ButtonIconComponent, ButtonComponent],
  templateUrl: './button-icon-view.component.html',
  styleUrl: './button-icon-view.component.scss',
})
export class ButtonIconViewComponent {}
