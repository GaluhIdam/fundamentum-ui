import { Component } from '@angular/core';
import {DatePickerComponent} from "fui";

@Component({
  selector: 'app-date-picker-view',
  standalone: true,
  imports: [DatePickerComponent],
  templateUrl: './date-picker-view.component.html',
  styleUrl: './date-picker-view.component.scss'
})
export class DatePickerViewComponent {

}
