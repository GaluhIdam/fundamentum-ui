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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() cols: number | 'auto' = 'auto';
  @Input() rows: number | 'auto' = 5;
  @Input({ required: true }) invalid: boolean = false;
  @Input({ required: true }) size: 's' | 'm' | 'l' = 'm';
  @Input() placeholder: string = 'Please type here...';
  @Input() formControlField: FormControl = new FormControl('');
  @Input() borderRadius: string = '5px 5px 5px 5px';
  @Input() showInput: boolean = true;
  @Input() disabled: boolean = false;
  iconLeft: boolean = false;
  iconRight: boolean = false;
  @Input() active: boolean = false;
  @ContentChildren(IconsComponent) iconComponents!: QueryList<IconsComponent>;
  @Output() onFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() onBlur: EventEmitter<any> = new EventEmitter<any>();

  prepend: boolean = false;
  append: boolean = false;

  @ViewChild('inputX') inputX: any;

  focusX: boolean = false;

  ngAfterViewInit() {
    // Ensure the height adjusts initially in case there's default text
    this.adjustTextareaHeight();
  }

  ngAfterContentInit() {
    if (this.disabled) {
      this.formControlField.disable();
    }
    this.iconComponents.forEach((item) => {
      if (item.label === 'left') {
        this.iconLeft = true;
      }
      if (item.label === 'right') {
        this.iconRight = true;
      }
    });
  }

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

  adjustTextareaHeight(): void {
    const textarea = this.inputX.nativeElement;
    textarea.style.height = 'auto'; // Reset the height to auto to calculate the scroll height correctly
    if (this.size === 's') {
      textarea.style.height = `${textarea.scrollHeight - 18}px`; // Set the height to the scroll height
    }
    if (this.size === 'm') {
      textarea.style.height = `${textarea.scrollHeight - 17}px`; // Set the height to the scroll height
    }
  }
}
