import { Component } from '@angular/core';

import {
  AvatarComponent,
  CollapsibleNavComponent,
  HeaderBreadcrumbComponent,
  HeaderBreadcrumbPanelComponent,
  HeaderComponent,
  HeaderPanelComponent,
  IconsComponent,
  LinkComponent,
} from 'fui';
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
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  show: boolean = false;
  component: Routes = routes;
  collapse(): void {
    this.show = !this.show;
  }
}
