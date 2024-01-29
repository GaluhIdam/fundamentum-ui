import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input('type') typeValue = '';
  @Input('value') textValue = '';
  @Input('placeholder') placeholderValue = '';
}
