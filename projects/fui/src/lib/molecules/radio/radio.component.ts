import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, DataRadioProps, Size } from '../../types';
import { TextComponent } from '../../atoms/text/text.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * The RadioComponent
 * @usage
 * ```html
 * <fui-radio
 *  [name]="'radio'"
 *  formControlName="formControl"
 *  [groupLabel]="'Label Radio'"
 *  [options]="options"
 *  [errorMessage]="errorMessage"
 *  [optionAlign]="'row'"
 *  (onChangeOption)="handleOnChangeOption($event)"
 * ></fui-radio>
 * ```
 * <example-url>http://localhost:4200/molecules/radio</example-url>
 */

@Component({
  selector: 'fui-radio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioComponent,
      multi: true,
    },
  ],
  imports: [CommonModule, TextComponent],
})
export class RadioComponent implements ControlValueAccessor {
  @Input() options: DataRadioProps[] = [];
  @Input({ required: true }) name: string = '';
  @Input() groupLabel: string = '';
  @Input() direction: 'row' | 'column' = 'column';
  @Input() optionAlign: 'row' | 'column' = 'column';
  @Input() color: Color = 'primary';
  @Input() size: Size = 'sizem';
  @Input() errorMessage: string = '';
  @Output() selectedRadio: EventEmitter<string> = new EventEmitter();
  @Output() onChangeOption: EventEmitter<DataRadioProps> = new EventEmitter();

  defaultValue: string = '';
  value: string = '';
  onChange = (value: string) => {};
  onTouch = () => {};

  writeValue(value: string): void {
    this.value = value;
    this.defaultValue = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  onToggle(event: Event, item: DataRadioProps) {
    const value = item.value;
    this.selectedRadio.emit(value);
    this.onChangeOption.emit(item);
    this.value = value;
    this.onChange(this.value);
    this.onTouch();
  }
}
