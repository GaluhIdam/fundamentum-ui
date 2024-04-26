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
  DarkModeService,
} from '../../../../fui/src/public-api';
import { Routes } from '@angular/router';
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
  ],
  providers: [DarkModeService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  show: boolean = false;
  component: Routes = routes;

  constructor(private darkModeService: DarkModeService) {}

  collapse(event: any): void {
    this.show = event;
  }
  collapseBtn(): void {
    this.show = !this.show;
  }

  toggleTheme() {
    this.darkModeService.toggleTheme();
  }
}
