import { Component, Input } from '@angular/core';
import { Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { HighlightComponent, IconsComponent } from '../../../public-api';
import { Router, RouterModule } from '@angular/router';

export interface DataSideDTO {
  heading?: string;
  size?: Size;
  icon?: Icon;
  title: string;
  link?: string;
  active: boolean;
  children?: DataSideDTO[];
}

/**
 * The CollapsibleNavComponent
 * @usage
 * ```html
 * <fui-sidenav
    [dataSide]="dataSide">
 * </fui-sidenav>
 * ```
 * <example-url>http://localhost:4200/template/side-nav</example-url>
 */
@Component({
  selector: 'fui-sidenav',
  standalone: true,
  imports: [CommonModule, IconsComponent, RouterModule, HighlightComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input({ required: true }) dataSide: DataSideDTO[] = [];
  @Input() highlightText: string = '';

  /**
   * @ignore
   */
  constructor(readonly router: Router) {}

  /**
   * @ignore
   */
  checkActive(data: DataSideDTO[]): void {
    data.forEach((item) => {
      if (item.link === this.router.url) {
        item.active = true;
      } else {
        item.active = false;
      }
      if (item.children && item.children.length > 0) {
        this.checkActive(item.children);
        if (item.children.some((child) => child.active)) {
          item.active = true;
        }
      }
    });
  }

  /**
   * @ignore
   */
  hasActiveChild(item: DataSideDTO): boolean {
    if (!item.children || item.children.length === 0) {
      return item.active;
    }
    return item.children.some((child) => this.hasActiveChild(child));
  }

  /**
   * @ignore
   */
  collapse(data: DataSideDTO[], index: number): void {
    data.forEach((item, i) => {
      if (i !== index) {
        item.active = false;
      }
    });
    data[index].active = !data[index].active;
    if (data[index].children!) {
      this.collapseChildren(data[index].children!);
    }
  }

  /**
   * @ignore
   */
  collapseChildren(children: DataSideDTO[]): void {
    children.forEach((child) => {
      child.active = false;
      if (child.children) {
        this.collapseChildren(child.children);
      }
    });
  }
}
