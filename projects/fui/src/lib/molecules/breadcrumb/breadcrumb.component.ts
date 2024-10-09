import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreadcrumbData, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextComponent } from '../../atoms/text/text.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { PopoverComponent } from '../../templates/popover/popover.component';

export interface BreadCrubmbDataType extends BreadcrumbData {
  active?: boolean;
  order?: number;
  truncated?: boolean;
}

/**
 * The BreadcrumbComponent
 * @usage
 * ```html
 * <fui-breadcrumb
 *  [data]="links"
 *  (onChangeBreadcrumb)="handleChange($event)"
 * ></fui-breadcrumb>
 * ```
 * <example-url>http://localhost:4200/molecules/breadcrumb</example-url>
 */
@Component({
  selector: 'fui-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    TextComponent,
    IconsComponent,
    PopoverComponent,
  ],
})
export class BreadcrumbComponent implements OnInit {
  @Input() data: BreadcrumbData[] = [];
  @Input() separator: string = '/';
  @Input() labelSize: 'xs' | 's' | 'm' | 'l' | 'xl' = 'm';
  @Input() maxDisplayLink: number = 5;
  @Output() onChangeBreadcrumb: EventEmitter<BreadcrumbData> =
    new EventEmitter();
  totalLinks!: number;
  currentLink: number = 1;
  visibleLinks: BreadCrubmbDataType[] = [];
  linkTruncated: BreadCrubmbDataType[] = [];
  groupedBreadcrumbs: BreadCrubmbDataType[][] = [];

  ngOnInit(): void {
    this.generateLinks();
  }

  generateLinks() {
    const mappedLink = this.data.map(
      (item: BreadCrubmbDataType, index: number) => {
        return { ...item, active: false, order: index + 1 };
      }
    );
    this.totalLinks = this.data.length;
    const linkDatas: BreadCrubmbDataType[] = [];
    const activeLink = this.currentLink;
    let first = 1;
    let last = this.totalLinks;
    const showEllipsis = this.totalLinks > this.maxDisplayLink;
    for (let i = 0; i < this.totalLinks; i++) {
      if (
        mappedLink[i].order === first ||
        mappedLink[i].order === last ||
        activeLink === mappedLink[i].order ||
        !showEllipsis ||
        activeLink - 1 === mappedLink[i].order ||
        (activeLink < Math.floor(this.maxDisplayLink / 2) + 1 &&
          mappedLink[i].order < this.maxDisplayLink) ||
        activeLink + 1 === mappedLink[i].order ||
        (activeLink > last - Math.floor(this.maxDisplayLink / 2) &&
          mappedLink[i].order > last - (this.maxDisplayLink - 1))
      ) {
        linkDatas.push(mappedLink[i]);
      }
    }

    const links: BreadCrubmbDataType[] = [];
    mappedLink.forEach((item: BreadCrubmbDataType, index: number) => {
      const correspondingLink = linkDatas.find(
        (link) => link.order === item.order
      );
      if (!correspondingLink) {
        links.push({ ...item, truncated: true });
        this.linkTruncated.push({ ...item, truncated: true });
      } else {
        links.push({
          ...item,
          active: activeLink === item.order,
          truncated: false,
        });
      }
      return links;
    });

    this.visibleLinks = links;
    this.groupBreadcrumbs();
  }

  groupBreadcrumbs() {
    this.groupedBreadcrumbs = [];
    let group: BreadCrubmbDataType[] = [];
    for (let i = 0; i < this.visibleLinks.length; i++) {
      if (this.visibleLinks[i].truncated) {
        group.push(this.visibleLinks[i]);
      } else {
        if (group.length > 0) {
          this.groupedBreadcrumbs.push(group);
          group = [];
        }
        this.groupedBreadcrumbs.push([this.visibleLinks[i]]);
      }
    }
    if (group.length > 0) {
      this.groupedBreadcrumbs.push(group);
    }
  }

  clickLink(item: BreadCrubmbDataType) {
    this.currentLink = item?.order ? item?.order : 1;
    this.generateLinks();
    this.onChangeBreadcrumb.emit({ label: item.label, link: item.link });
  }
}
