import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  EventEmitter,
  HostListener,
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
  iconLeft: boolean = false;
  iconRight: boolean = false;
  active: boolean = false;
  @ContentChildren(IconsComponent) iconComponents!: QueryList<IconsComponent>;
  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('inputX') inputX: any;

  focusX: boolean = false;

  ngAfterContentInit() {
    this.iconComponents.forEach((item) => {
      if (item.label === 'left') {
        this.iconLeft = true;
      }
      if (item.label === 'right') {
        this.iconRight = true;
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.focusX = !this.focusX;
      if (this.focusX) {
        this.inputX.nativeElement.focus();
      } else {
        this.inputX.nativeElement.blur();
      }
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
