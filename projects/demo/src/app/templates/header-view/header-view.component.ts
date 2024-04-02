import { Component } from '@angular/core';
import { AvatarComponent, HeaderComponent, HeaderPanelComponent, IconsComponent, LinkComponent } from '../../../../../fui/src/public-api';

@Component({
  selector: 'app-header-view',
  standalone: true,
  imports: [HeaderComponent, HeaderPanelComponent, IconsComponent, LinkComponent, AvatarComponent],
  templateUrl: './header-view.component.html',
  styleUrl: './header-view.component.scss'
})
export class HeaderViewComponent {

}
