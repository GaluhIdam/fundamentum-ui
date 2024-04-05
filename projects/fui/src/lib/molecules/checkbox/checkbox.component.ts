import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';
import { Color, DataCheckboxProps, Size } from '../../types';

/**
 * The CheckboxComponent
 * @usage
 * ```html
 * <fui-checkbox
 *  formControlName="formControlName"
 *  [groupLabel]="'Checkbox Label'"
 *  [options]="dataCheckbox"
 *  [errorMessage]="errorMessage"
 *  [optionAlign]="'row'"
 *  (onChangeOption)="handleOnChangeOption($event)"
 * ></fui-checkbox>
 * ```
 * <example-url>http://localhost:4200/molecules/checkbox</example-url>
 */

@Component({
  selector: 'fui-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
  imports: [CommonModule, ReactiveFormsModule, TextComponent],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() options: DataCheckboxProps[] = [];
  @Input() groupLabel: string = '';
  @Input() direction: 'row' | 'column' = 'column';
  @Input() optionAlign: 'row' | 'column' = 'column';
  @Input() color: Color = 'primary';
  @Input() size: Size = 'sizes';
  @Input() errorMessage: string = '';
  @Output() selectedCheckbox: EventEmitter<string[]> = new EventEmitter();
  @Output() onChangeOption: EventEmitter<DataCheckboxProps> =
    new EventEmitter();

  value: string[] = [];
  onChange = (value: string[]) => {};
  onTouch = () => {};

  mappedDataCheckbox: DataCheckboxProps[] = [];
  dataSelectedCheckbox: string[] = [];

  ngOnInit() {
    this.getMappedData();
  }

  getMappedData() {
    this.mappedDataCheckbox = this.options.map((item: DataCheckboxProps) => {
      return {
        ...item,
        isChecked: item.isChecked || false,
        indeterminate: item.indeterminate || false,
      };
    });
  }

  writeValue(value: string[]): void {
    if (value?.length) {
      this.mappedDataCheckbox = this.mappedDataCheckbox.map(
        (item: DataCheckboxProps) => {
          value.forEach((defaultValue: string) => {
            if (defaultValue === item.value) {
              item.isChecked = true;
            }
          });
          return item;
        }
      );
    }
    this.value = value;
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  onToggle(event: Event, item: DataCheckboxProps) {
    const value = item.value;
    const isChecked = (event.target as HTMLInputElement)?.checked;
    if (isChecked) {
      this.dataSelectedCheckbox.push(value);
    } else {
      this.dataSelectedCheckbox = this.dataSelectedCheckbox.filter(
        (selected) => selected !== value
      );
    }
    this.value = this.dataSelectedCheckbox;
    this.selectedCheckbox.emit(this.dataSelectedCheckbox);
    this.onChangeOption.emit(item);
    this.onChange(this.value);
    this.onTouch();
  }
}
