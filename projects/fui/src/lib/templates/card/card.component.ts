import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { TextComponent } from '../../atoms/text/text.component';
import { ButtonComponent } from '../../atoms/button/button.component';

/**
 * The CardComponent
 * @usage
 * ```html
 * <fui-card
 *  [title]="'Card Title'"
 *  [icon]="'package'">
 *    Content
 * </fui-card>
 * ```
 * <example-url>http://localhost:4200/templates/card</example-url>
 */

@Component({
  selector: 'fui-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [CommonModule, IconsComponent, TextComponent, ButtonComponent],
})
export class CardComponent {
  @Input() layout: 'horizontal' | 'vertical' = 'vertical';
  @Input() cardContentAlign: 'start' | 'center' | 'end' = 'center';
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'l';
  @Input() radius: 'none' | 's' | 'm' = 's';
  @Input() cardColor!: Color;
  @Input() title: string = '';
  @Input() titleSize: Size = 'sizel';
  @Input() titleColor!: Color;
  @Input() iconType: 'icon' | 'image' = 'icon';
  @Input() icon!: Icon;
  @Input() iconImage: string = '';
  @Input() iconSize: Size = 'sizexxl';
  @Input() iconColor!: Color;
  @Input() cardImage: string = '';
  @Input() showButtonFooter: boolean = false;
  @Input() buttonFooterText: string = '';
  @Input() buttonFooterWidth: 'auto' | 'full' = 'full';
  @Input() buttonFooterAlign: 'start' | 'center' | 'end' = 'center';
  @Input() buttonFooterSize: Size = 'sizem';
  @Input() buttonFooterColor: Color = 'primary';
  @Input() cardBadgeText: string = '';
  @Input() cardBadgeSize: Size = 'sizes';
  @Input() cardBadgeBackground!: Color;
  @Input() cardBadgeColor!: Color;
  @Output() onClickCard: EventEmitter<void> = new EventEmitter();

  handleOnClickCard() {
    this.onClickCard.emit();
  }
}
