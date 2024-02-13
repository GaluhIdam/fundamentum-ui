import { Component, Input } from '@angular/core';
import { Color, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'fui-empty-prompt',
  standalone: true,
  templateUrl: './empty-prompt.component.html',
  styleUrl: './empty-prompt.component.scss',
  imports: [CommonModule, ButtonComponent, ButtonEmptyComponent, TextComponent],
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
}
