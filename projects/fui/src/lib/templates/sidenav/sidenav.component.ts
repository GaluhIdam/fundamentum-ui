import { Component, Input } from '@angular/core';
import { Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../../public-api';
import { Router, RouterModule } from '@angular/router';

export interface DataSideDTO {
  heading?: string;
  icon?: {
    type: Icon;
    size: Size;
  };
  title: string;
  link?: string;
  active: boolean;
  children?: DataSideDTO[];
}

@Component({
  selector: 'fui-sidenav',
  standalone: true,
  imports: [CommonModule, IconsComponent, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input({ required: true }) dataSide: DataSideDTO[] = [];

  /**
   * @ignore
   */
  constructor(readonly router: Router) {}

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.checkActive(this.dataSide);
  }

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
