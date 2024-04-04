import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipComponent } from '../../tooltip/tooltip.component';

@Component({
  selector: 'fui-header-breadcrumb-panel',
  standalone: true,
  imports: [RouterModule, TooltipComponent],
  templateUrl: './header-breadcrumb-panel.component.html',
  styleUrl: './header-breadcrumb-panel.component.scss',
})
export class HeaderBreadcrumbPanelComponent {
  @Input() urlLink?: string;
  clip: 'clip-first' | 'clip-mid' | 'clip-last' = 'clip-mid';
}
