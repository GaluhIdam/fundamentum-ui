import { Component, Input } from '@angular/core';
import { Color, Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { TextComponent } from '../../atoms/text/text.component';
import { IconsComponent } from '../../atoms/icons/icons.component';

/**
 * The EmptyPromptComponent
 * @usage
 * ```html
 * <fui-empty-prompt
 *  [title]="'Empty Prompt Title'"
 *  [buttonText]="'Button'"
 *  [secondaryButtonText]="'Secondary action'"
 *  [shadow]="true"
 *  [secondaryButtonColor]="'primary'">
 *    Content
 * </fui-empty-prompt>
 * ```
 * <example-url>http://localhost:4200/organisms/empty-prompt</example-url>
 */

@Component({
  selector: 'fui-empty-prompt',
  standalone: true,
  templateUrl: './empty-prompt.component.html',
  styleUrl: './empty-prompt.component.scss',
  imports: [
    CommonModule,
    ButtonComponent,
    ButtonEmptyComponent,
    TextComponent,
    IconsComponent,
  ],
})
export class EmptyPromptComponent {
  @Input() title: string = '';
  @Input() color!:
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'text'
    | 'accent'
    | 'disabled';
  @Input() paddingSize: Size = 'sizedefault';
  @Input() shadow: boolean = true;
  @Input() image: string = '';
  @Input() direction: 'vertical' | 'horizontal' = 'vertical';
  @Input() buttonText: string = '';
  @Input() buttonColor!: Color;
  @Input() buttonSize!: Size;
  @Input() secondaryButtonText: string = '';
  @Input() secondaryButtonColor!: Color;
  @Input() secondaryButtonSize!: Size;
  @Input() icon!: Icon;
  @Input() iconSize: Size = 'sizedefault';
}
