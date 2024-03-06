import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'fui-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TextComponent],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() control = new FormControl();
  @Input() value: string = '';
  @Input() labelText?: string;
  @Input() placeholder: string = '';
  @Input() rows: number = 3;
}
