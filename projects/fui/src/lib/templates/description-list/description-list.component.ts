import { Component, Input } from '@angular/core';
import { Color, DescriptionListProps, Size } from '../../types';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';

type TextStyleProps =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

type ColumnWidth = 1 | 2 | 3 | 4;

/**
 * The DescriptionListComponent
 * @usage
 * ```html
 * <fui-description-list
 *  [data]="descriptionListData"
 *  [type]="'column'"
 *  [gap]="'m'"
 *  [align]="'left'"
 * ></fui-description-list>
 * ```
 */
@Component({
  selector: 'fui-description-list',
  standalone: true,
  templateUrl: './description-list.component.html',
  styleUrl: './description-list.component.scss',
  imports: [CommonModule, TextComponent],
})
export class DescriptionListComponent {
  @Input() data: DescriptionListProps[] = [];
  @Input() type: 'row' | 'column' | 'inline' = 'row';
  @Input() gap: 's' | 'm' = 's';
  @Input() align: 'left' | 'center' | 'right' = 'left';
  @Input() titleAlign!: 'left' | 'center' | 'right';
  @Input() descriptionAlign!: 'left' | 'center' | 'right';
  @Input() titleTextWeight: TextStyleProps = 'bold';
  @Input() titleSize: Size = 'sizedefault';
  @Input() titleColor!: Color;
  @Input() titleColumnWidth: ColumnWidth = 4;
  @Input() descriptionTextWeight: TextStyleProps = 'normal';
  @Input() descriptionSize: Size = 'sizedefault';
  @Input() descriptionColor!: Color;
  @Input() descriptionColumnWidth: ColumnWidth = 4;
}
