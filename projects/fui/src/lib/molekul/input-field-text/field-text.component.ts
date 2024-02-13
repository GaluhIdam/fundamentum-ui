import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../atoms/input/input.component';

@Component({
  selector: 'fui-input-field-text',
  standalone: true,
  imports: [FormsModule, InputComponent],
  templateUrl: './field-text.component.html',
  styleUrl: './field-text.component.scss',
})
export class FieldTextComponent {
  nilaiInput?: string = '';
  @Input() valueInput: string = '';
  @Input({ required: true, alias: 'titleLabel' }) labelTextValue: string = '';
  @Input({ required: true, alias: 'helpLabel' }) helpTextValue: string = '';

  constructor() {}
}
