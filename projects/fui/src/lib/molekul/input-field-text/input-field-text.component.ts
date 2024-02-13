import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fui-input-field-text',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-field-text.component.html',
  styleUrl: './input-field-text.component.scss',
})
export class InputFieldTextComponent {
  @Input('input') valueInput: string = '';
  @Input({ required: true, alias: 'titleLabel' }) labelTextValue: string = '';
  @Input({ required: true, alias: 'helpLabel' }) helpTextValue: string = '';
}
