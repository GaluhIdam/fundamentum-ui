import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  PageBodyComponent,
  PageComponent,
  PageHeaderComponent,
  PageSectionComponent,
  PageSidebarComponent,
  TextComponent,
} from 'fui';

@Component({
  selector: 'app-page-view',
  standalone: true,
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.scss',
  imports: [
    PageComponent,
    PageSidebarComponent,
    PageBodyComponent,
    PageSectionComponent,
    PageHeaderComponent,
    ButtonIconComponent,
    TextComponent,
  ],
})
export class PageViewComponent {
  isSidebar: boolean = true;
  isGrow: boolean = true;
  isRestrictWidth: boolean = false;
  direction: 'horizontal' | 'vertical' = 'horizontal';
  extendedBorder: boolean = false;
}
