import { ChangeDetectorRef, Component } from '@angular/core';

import {
  AvatarComponent,
  CollapsibleNavComponent,
  HeaderBreadcrumbComponent,
  HeaderBreadcrumbPanelComponent,
  HeaderComponent,
  HeaderPanelComponent,
  IconsComponent,
  LinkComponent,
  FormControlLayoutComponent,
  InputFieldComponent,
  PageBodyComponent,
  PageComponent,
  PageHeaderComponent,
  PageSectionComponent,
  PageSidebarComponent,
  DarkModeService,
  TextComponent,
  ButtonIconComponent,
} from '../../../../fui/src/public-api';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeaderPanelComponent,
    IconsComponent,
    LinkComponent,
    AvatarComponent,
    HeaderBreadcrumbComponent,
    HeaderBreadcrumbPanelComponent,
    CollapsibleNavComponent,
    LinkComponent,
    FormControlLayoutComponent,
    InputFieldComponent,
    PageBodyComponent,
    PageComponent,
    PageHeaderComponent,
    PageSectionComponent,
    PageSidebarComponent,
    TextComponent,
    ButtonIconComponent,
    RouterModule,
  ],
  providers: [DarkModeService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  router: Routes = routes;
  isSidebar: boolean = true;
  isGrow: boolean = true;
  isRestrictWidth: boolean = false;
  direction: 'horizontal' | 'vertical' = 'horizontal';
  extendedBorder: boolean = false;

  show: boolean = false;
  component: Routes = routes;

  constructor(private darkModeService: DarkModeService) {}

  collapseBtn(): void {
    this.isSidebar = !this.isSidebar;
  }

}
