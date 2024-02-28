import { Component, Input, forwardRef } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'fui-text-field-complex',
  standalone: true,
  imports: [IconsComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './text-field-complex.component.html',
  styleUrl: './text-field-complex.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextFieldComplexComponent),
      multi: true,
    },
  ],
})
export class TextFieldComplexComponent {
  @Input() placeholder: string = 'Placeholder text';
  @Input() value: string | null = '';
  @Input() readOnly: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() validator: boolean = false;
  @Input() message?: string;
  @Input() loading: boolean = false;
  @Input() textFieldControl: FormControl = new FormControl('');
  @Input() inputGroup: 'prepend' | 'append' | 'none' = 'none';
  @Input() textPend?: string;

  writeValue(value: any): void {
    this.textFieldControl.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.textFieldControl.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.textFieldControl.disable();
    } else {
      this.textFieldControl.enable();
    }
  }
}
