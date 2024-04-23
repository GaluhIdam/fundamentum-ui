import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';

/**
 * The AccordionComponent
 * @usage
 * ```html
 * <fui-accordion [title]="'Title Accordion'">
 *  Content
 * </fui-accordion>
 * ```
 * <example-url>http://localhost:4200/organisms/accordion</example-url>
 */

@Component({
  selector: 'fui-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  imports: [CommonModule, IconsComponent, TextComponent],
})
export class AccordionComponent {
  @Input() isExpand: boolean = false;
  @Input() title: string = '';
  @Input() titleSize: Size = 'sizedefault';
  @Input() titleColor!: Color;
  @Input() bodySize: Size = 'sizedefault';
  @Input() bodyColor!: Color;
  @Input() iconSize: Size = 'sizedefault';
  @Input() iconColor!: Color;
  @Input() collapsedIcon: Icon = 'arrowRight';
  @Input() expandIcon: Icon = 'arrowDown';
  @Input() isLoading: boolean = false;
  @Input() expandIconPosition: 'start' | 'end' = 'start';
  @Output() onExpand: EventEmitter<void> = new EventEmitter();

  onExpandAccordion() {
    this.isExpand = !this.isExpand;
    this.onExpand.emit();
  }
}
