import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  InputComponent,
  TextComponent,
  IconsComponent,
  ButtonComponent,
  SpacerComponent,
} from '../../../public-api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fui-input-field-password',
  standalone: true,
  imports: [
    InputComponent,
    TextComponent,
    IconsComponent,
    ButtonComponent,
    SpacerComponent,
  ],
  templateUrl: './input-field-password.component.html',
  styleUrl: './input-field-password.component.scss',
})
export class InputFieldPasswordComponent {
  @Input() control = new FormControl();
  @Input() valueInput?: string;
  @Input('label') labelText?: string;
  @Output() valueChanges = new EventEmitter();
  showPassword = 'password';
  showPasswordIcon = 'eye';

  // togglePassword() {
  //   this.showPassword = (this.showPassword ==='password') ? 'text':'password'
  // }

  onShowPassword() {
    this.showPassword = this.showPassword === 'password' ? 'text' : 'password';
    this.showPasswordIcon =
      this.showPasswordIcon === 'eye' ? 'eyeClosed' : 'eye';
    console.log(this.showPasswordIcon);
  }

  onInput(e: any) {
    const val = (e.target as HTMLInputElement).value;
    this.valueInput = val;
    console.log(val);
    this.valueChanges.emit(this.valueInput);
  }
}
