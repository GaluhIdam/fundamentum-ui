import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoadingComponent } from '../loading/loading.component';
import { IconsComponent } from '../../atoms/icons/icons.component';

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
  @Input() search: boolean = true;
  @Input() textFieldControl: FormControl = new FormControl('');
  @Input() inputGroup: 'prepend' | 'append' | 'prepend-append' | 'none' =
    'none';
  @Input() textPrepend: string = '';
  @Input() textAppend: string = '';
  @Input() size: 's' | 'm' | 'l' = 'm';
  @Input() typeField: 'text' | 'number' | 'select' = 'text';
  @Input() selectOptions?: Array<{ label: string; value: any }>;

  /**
   * @ignore
   */
  writeValue(value: any): void {
    this.textFieldControl.setValue(value);
  }

  /**
   * @ignore
   */
  registerOnChange(fn: any): void {
    this.textFieldControl.valueChanges.subscribe(fn);
  }

  /**
   * @ignore
   */
  registerOnTouched(fn: any): void {}

  /**
   * @ignore
   */
  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.textFieldControl.disable();
    } else {
      this.textFieldControl.enable();
    }
  }
}
