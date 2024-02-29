import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fui-input-base',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  // @Input('type') typeValue?: string;
  // @Input('label') textValue?: string;
  // @Input('helpText') helpTextValue?: string;
  @Input('placeholder') placeholderValue = '';
  @Input('color') colorValue = 'primary';
  @Input('size') sizeValue: string = 'sizem';
  @Input('width') widthValue: string = 'auto';
  @Input() controlName!: FormControl;
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
