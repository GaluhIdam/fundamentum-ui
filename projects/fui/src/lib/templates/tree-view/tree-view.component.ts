import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Size, TreeViewProps } from '../../types';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';

/**
 * The TreeViewComponent
 * @usage
 * ```html
 * <fui-tree-view
 *  [dataTreeView]="dataTreeView"
 *  [size]="'sizem'"
 *  (onClickItem)="handleOnclikItem($event)"
 * ></fui-tree-view>
 * ```
 * <example-url>http://localhost:4200/templates/tree-view</example-url>
 */

@Component({
  selector: 'fui-tree-view',
  standalone: true,
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
  imports: [CommonModule, IconsComponent, TextComponent],
})
export class TreeViewComponent {
  @Input() dataTreeView: TreeViewProps[] = [];
  @Input() size: Size = 'sizedefault';
  @Input() color!: Color;
  @Input() itemWrap: 'elipsis' | 'wrap' = 'wrap';
  @Output() onClickItem: EventEmitter<TreeViewProps> = new EventEmitter();

  handleOnclickItem(item: TreeViewProps) {
    this.onClickItem.emit(item);
  }
}
