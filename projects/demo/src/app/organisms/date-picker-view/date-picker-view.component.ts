import { Component } from '@angular/core';
import {DatePickerComponent} from "fui";
import {FormControl} from "@angular/forms";
import dayjs from "dayjs";

@Component({
  selector: 'app-date-picker-view',
  standalone: true,
  imports: [DatePickerComponent],
  templateUrl: './date-picker-view.component.html',
  styleUrl: './date-picker-view.component.scss'
})
export class DatePickerViewComponent {
  selectedDate: string = "";
  dateFormControl:FormControl = new FormControl(dayjs().format("YYYY/MM/DD"));
  isInvalid:boolean = false;
  errorMessage: string = "Input is not valid.";

  onChangeHandler(value: string) {
    this.selectedDate = value;
  }

  onValidateHandler(value: boolean) {
    this.isInvalid = value;
  }
}
