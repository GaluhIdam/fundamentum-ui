import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoadingComponent } from '../../molecules/loading/loading.component';
import { IconsComponent } from '../icons/icons.component';

/**
 * The TextFieldComplexComponent component
 * @usage
 * ```html
 * <fui-text-field-complex
     [loading]="true"
     formControlName="lastName"
     [fullWidth]="true"
     [inputGroup]="'prepend'"
     [textPrepend]="'Prepend'"
     [message]="'This is required!'">
 * </fui-text-field-complex>
 * //Or
 * <fui-text-field-complex
     [textFieldControl]="textField"
     [fullWidth]="true"
     [validator]="false"
     [message]="'This is required !'">
 * </fui-text-field-complex>
 * ```
 * <example-url>http://localhost:4200/atoms/text-field</example-url>
 */
@Component({
  selector: 'fui-text-field-complex',
  standalone: true,
  imports: [
    IconsComponent,
    LoadingComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
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
  @Input() inputGroup: 'prepend' | 'append' | 'prepend-append' | 'none' =
    'none';
  @Input() textPrepend: string = '';
  @Input() textAppend: string = '';
  @Input() size: 's' | 'm' | 'l' = 'm';

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
