import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Icon } from '../../types';
import { IconsComponent } from '../../../public-api';

/**
 * The TabsComponent component
 * @usage
 * ```html
 * <fui-tabs
    [dataTabs]="dataTabs">
 * </fui-tabs>
 * ```
 * <example-url>http://localhost:4200/molecules/tabs</example-url>
 */
@Component({
  selector: 'fui-tabs',
  standalone: true,
  imports: [CommonModule, IconsComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input({ required: true }) dataTabs?: {
    active: boolean | 'disabled';
    icon?: Icon;
    sideIcon?: 'right' | 'left';
    prepend?: string;
    append?: string;
    title: string;
    content: string;
  }[];

  onActive(
    dataT: {
      active: boolean | 'disabled';
      icon?: Icon;
      sideIcon?: 'right' | 'left';
      prepend?: string;
      append?: string;
      title: string;
      content: string;
    }[],
    index: number
  ): void {
    dataT.forEach((item) => {
      item.active === true
        ? (item.active = false)
        : item.active === false
        ? (item.active = false)
        : (item.active = 'disabled');
    });
    dataT[index].active = true;
  }
}
