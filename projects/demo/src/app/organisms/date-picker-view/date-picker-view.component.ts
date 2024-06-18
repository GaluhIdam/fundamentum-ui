import { Component } from '@angular/core';
import {DatePickerComponent} from "fui";
import {FormControl} from "@angular/forms";
import {TimeSelectionComponent} from "../../../../../fui/src/lib/organisms/time-selection/time-selection.component";
import {DateRangeComponent} from "../../../../../fui/src/lib/organisms/date-range/date-range.component";

@Component({
  selector: 'app-date-picker-view',
  standalone: true,
  imports: [DatePickerComponent
    , TimeSelectionComponent
    , DateRangeComponent],
  templateUrl: './date-picker-view.component.html',
  styleUrl: './date-picker-view.component.scss'
})
export class DatePickerViewComponent {
  selectedDate: string = "";
  dateFormControl:FormControl = new FormControl();
  isInvalid:boolean = false;
  errorMessage: string = "Input is not valid.";

  onChangeHandler(value: string) {
    this.selectedDate = value;
  }

  onValidateHandler(value: boolean) {
    this.isInvalid = value;
  }
}
