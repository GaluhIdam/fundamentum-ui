import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  IconsComponent,
  InputComponent,
  SpacerComponent,
  TextComponent,
} from '../../../public-api';

@Component({
  selector: 'fui-input-search-field',
  standalone: true,
  imports: [
    CommonModule,
    TextComponent,
    InputComponent,
    IconsComponent,
    SpacerComponent,
  ],
  templateUrl: './input-search-field.component.html',
  styleUrl: './input-search-field.component.scss',
})
export class InputSearchFieldComponent {
  @Input() control = new FormControl();
  @Input() valueInput?: string;
  @Input('label') labelText?: string;
  @Input('placeholder') placeholderValue?: string;
  @Output() valueChanges = new EventEmitter();

  onInput(e: any) {
    const val = (e.target as HTMLInputElement).value;
    this.valueInput = val;
    console.log(val);
    this.valueChanges.emit(this.valueInput);
  }
}
