import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-field-text',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input('type') typeValue?: string;
  @Input('label') textValue?: string;
  @Input('placeholder') placeholderValue?: string;
  @Input('helpText') helpTextValue?: string;
}
