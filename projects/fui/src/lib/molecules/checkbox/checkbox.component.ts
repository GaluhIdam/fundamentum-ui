import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from '../../atoms/text/text.component';
import { CommonModule } from '@angular/common';
import { Color, Size } from '../../types';

interface DataCheckboxProps {
  label: string;
  value: string;
  isChecked?: boolean;
  indeterminate?: boolean;
}

@Component({
  selector: 'fui-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  imports: [CommonModule, ReactiveFormsModule, TextComponent],
})
export class CheckboxComponent {
  @Input() options: DataCheckboxProps[] = [];
  @Input() groupLabel: string = '';
  @Input() direction: 'row' | 'column' = 'column';
  @Input() color: Color = 'primary';
  @Input() size: Size = 'sizes';
  @Input() errorMessage: string = '';
  @Output() selectedCheckbox: EventEmitter<string[]> = new EventEmitter();

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

  onToggle(event: Event, value: string) {
    const isChecked = (event.target as HTMLInputElement)?.checked;
    if (isChecked) {
      this.dataSelectedCheckbox.push(value);
    } else {
      this.dataSelectedCheckbox = this.dataSelectedCheckbox.filter(
        (item) => item !== value
      );
    }

    this.selectedCheckbox.emit(this.dataSelectedCheckbox);
  }
}
