import { Component } from '@angular/core';
import {
  AvatarComponent,
  HeaderBreadcrumbComponent,
  HeaderBreadcrumbPanelComponent,
  HeaderComponent,
  HeaderPanelComponent,
  IconsComponent,
  LinkComponent,
} from 'fui';

@Component({
  selector: 'app-header-view',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderPanelComponent,
    IconsComponent,
    LinkComponent,
    AvatarComponent,
    HeaderBreadcrumbComponent,
    HeaderBreadcrumbPanelComponent,
  ],
  templateUrl: './header-view.component.html',
  styleUrl: './header-view.component.scss',
})
export class HeaderViewComponent {}
