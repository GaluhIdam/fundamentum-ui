import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, Size } from '../../types';
import { TextComponent } from '../../atoms/text/text.component';

interface DataCheckboxProps {
  label: string;
  value: string;
}

@Component({
  selector: 'fui-radio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  imports: [CommonModule, TextComponent],
})
export class RadioComponent {
  @Input() options: DataCheckboxProps[] = [];
  @Input({ required: true }) name: string = '';
  @Input() defaultValue: string = '';
  @Input() groupLabel: string = '';
  @Input() direction: 'row' | 'column' = 'column';
  @Input() color: Color = 'primary';
  @Input() size: Size = 'sizem';
  @Input() errorMessage: string = '';
  @Output() selectedRadio: EventEmitter<string> = new EventEmitter();

  onToggle(event: Event, value: string) {
    this.selectedRadio.emit(value);
  }
}
