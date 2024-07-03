import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { Icon, Size } from '../../types';
import { TabsContentComponent } from './tabs-content/tabs-content.component';
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
  @ContentChildren(TabsContentComponent)
  contentComponents!: QueryList<TabsContentComponent>;
  @Input({ required: true }) dataTabs!: {
    active: boolean | 'disabled';
    icon?: Icon;
    sideIcon?: 'right' | 'left';
    sizeIcon?: Size;
    title: string;
  }[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contentComponents.forEach((content) => {
        this.dataTabs.forEach((item) => {
          if (item.active === true && content.id === item.title) {
            content.show = true;
          }
        });
      });
      this.cdr.detectChanges();
    }, 0);
  }
  onActive(index: number, title: string): void {
    this.contentComponents.forEach((content) => {
      if (content.id === title) {
        content.show = true;
      } else {
        content.show = false;
      }
    });
    this.dataTabs!.forEach((item) => {
      item.active === true
        ? (item.active = false)
        : item.active === false
        ? (item.active = false)
        : (item.active = 'disabled');
    });
    this.dataTabs[index].active = true;
  }
}
