import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { IconsComponent } from '../../../../public-api';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fui-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input({ required: true }) type:
    | 'text'
    | 'number'
    | 'password'
    | 'date'
    | 'time'
    | 'email' = 'text';
  @Input({ required: true }) invalid: boolean = false;
  @Input({ required: true }) size: 's' | 'm' | 'l' = 'm';
  @Input() placeholder: string = 'Please type here...';
  @Input() formControlField: FormControl = new FormControl('');
  @Input() borderRadius: string = '5px 5px 5px 5px';
  @Input() showInput: boolean = true;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() active: boolean = false;
  @ContentChildren(IconsComponent) iconComponents!: QueryList<IconsComponent>;
  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('inputX') inputX: any;

  focusX: boolean = false;

  ngOnChanges(): void {
    if (this.disabled) {
      this.formControlField.disable();
    } else {
      this.formControlField.enable();
    }
  }

  handleOnFocus(): void {
    this.active = true;
    this.onFocus.emit();
  }
  handleOnBlur(): void {
    this.active = false;
    this.onBlur.emit();
  }
}
