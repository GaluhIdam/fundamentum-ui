import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { TextComponent } from '../../../public-api';

@Component({
  selector: 'fui-input-base',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TextComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input('type') typeValue?: string = 'text';
  @Input() textValue?: any;
  // @Input('helpText') helpTextValue?: string;
  @Input('placeholder') placeholderValue = '';
  @Input('color') colorValue = 'primary';
  @Input('passwordIcon') passwordIconValue = '';
  @Input('size') sizeValue: string = 'sizedefault';
  @Input('width') widthValue: string = 'auto';
  @Input() controlName = new FormControl('');
  @Input() minValue?: number;

  @Output() textChange = new EventEmitter();

  onInput(e: any) {
    const nilai = (e.target as HTMLInputElement).value;
    this.textChange.emit(nilai);
  }

  onHasError(control: FormControl) {
    const isTouched = control.touched;
    const isRequired = control.errors?.['required'];
    const isMinLength = control.errors?.['minlength'];

    return isTouched && (isRequired || isMinLength) ? 'has-error' : '';
  }
}
