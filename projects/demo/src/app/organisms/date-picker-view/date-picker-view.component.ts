import { Component } from '@angular/core';
import {
  DatePickerComponent,
  DateRangeComponent,
  TimeSelectionComponent,
} from 'fui';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-picker-view',
  standalone: true,
  imports: [DatePickerComponent, TimeSelectionComponent, DateRangeComponent],
  templateUrl: './date-picker-view.component.html',
  styleUrl: './date-picker-view.component.scss',
})
export class DatePickerViewComponent {
  selectedDate: string = '';
  dateFormControl: FormControl = new FormControl('', Validators.required);
  clockForm: FormControl = new FormControl('');
  isInvalid: boolean = false;
  errorMessage: string = 'Input is not valid.';

  onChangeHandler(value: string) {
    this.selectedDate = value;
  }

  onValidateHandler(value: boolean) {
    this.isInvalid = value;
  }

  resetAct(): void {
    this.dateFormControl.reset();
  }

  resetClock(): void {
    this.clockForm.reset();
  }
}
