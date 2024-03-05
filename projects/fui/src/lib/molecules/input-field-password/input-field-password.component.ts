import { Component, Input } from '@angular/core';
import {
  InputComponent,
  TextComponent,
  IconsComponent,
} from '../../../public-api';
import { FormControl } from '@angular/forms';
import { text } from 'stream/consumers';

@Component({
  selector: 'fui-input-field-password',
  standalone: true,
  imports: [InputComponent, TextComponent, IconsComponent],
  templateUrl: './input-field-password.component.html',
  styleUrl: './input-field-password.component.scss',
})
export class InputFieldPasswordComponent {
  @Input() control = new FormControl();
  @Input() valueInput?: string;
  @Input() labelText?: string;
  showPassword = false;

  onShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword === false) {
      return 'password';
    } else {
      return 'text';
    }
  }

  onInput(e: any) {
    const val = (e.target as HTMLInputElement).value;
    this.valueInput = val;
    console.log(val);
  }
}
