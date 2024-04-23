import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

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
    FormControlLayoutComponent,
    InputFieldComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  @ViewChild('headerHeight') headerHeight?: ElementRef;
  show: boolean = false;
  component: Routes = routes;
  sidebarHeight: string = '0';

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.headerHeight) {
      this.sidebarHeight = `${this.headerHeight.nativeElement.offsetHeight}px`;
      this.cdr.detectChanges();
    }
  }

  collapse(): void {
    this.show = !this.show;
  }
}
