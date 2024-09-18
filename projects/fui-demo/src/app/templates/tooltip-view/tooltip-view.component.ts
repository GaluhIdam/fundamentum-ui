import { Component } from '@angular/core';
import { IconsComponent, TooltipComponent } from 'fui';

@Component({
  selector: 'app-tooltip-view',
  standalone: true,
  templateUrl: './tooltip-view.component.html',
  styleUrl: './tooltip-view.component.scss',
  imports: [TooltipComponent, IconsComponent],
})
export class TooltipViewComponent {}
