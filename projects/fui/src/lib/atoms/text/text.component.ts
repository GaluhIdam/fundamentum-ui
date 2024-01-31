import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fui-text',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss',
})
export class TextComponent {
  @Input('color') colorValue = 'text';
  @Input('size') sizeValue: string = 'sizem';
  @Input('width') widthValue: string = 'auto';
  @Input('type') typeValue: string = 'normal';
}
