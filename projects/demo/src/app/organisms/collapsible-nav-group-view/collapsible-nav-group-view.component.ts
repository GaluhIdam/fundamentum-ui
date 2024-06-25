import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  CollapsibleNavGroupComponent,
  IconsComponent,
} from 'fui';

@Component({
  selector: 'app-collapsible-nav-group-view',
  standalone: true,
  imports: [CollapsibleNavGroupComponent, IconsComponent, ButtonIconComponent],
  templateUrl: './collapsible-nav-group-view.component.html',
  styleUrl: './collapsible-nav-group-view.component.scss',
})
export class CollapsibleNavGroupViewComponent {
  isCollapsed: boolean = true;
  isCollapsed2: boolean = false;
  isCollapsed3: boolean = false;
  isCollapsed4: boolean = false;
  isCollapsed5: boolean = false;
  isCollapsed6: boolean = false;

  test(): void {
    this.isCollapsed2 = !this.isCollapsed2;
  }

  toggleCollapse(event: any): void {
    this.isCollapsed = event;
    console.log(event);
  }
  toggleCollapse2(event: any): void {
    this.isCollapsed2 = event;
  }
  toggleCollapse3(event: any): void {
    this.isCollapsed3 = event;
  }
  toggleCollapse4(event: any): void {
    this.isCollapsed4 = event;
  }
  toggleCollapse5(event: any): void {
    this.isCollapsed5 = event;
  }
  toggleCollapse6(event: any): void {
    this.isCollapsed6 = event;
  }
}
