import {Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {NgForOf} from "@angular/common";
import {FormControl, FormsModule} from "@angular/forms";
import {ButtonEmptyComponent} from "../../atoms/button-empty/button-empty.component";
import {ButtonIconComponent} from "../../molecules/button-icon/button-icon.component";
import {InputFieldComponent} from "../../molecules/form-control-layout/input-field/input-field.component";
import {IconsComponent} from "../../atoms/icons/icons.component";
import {FormControlLayoutComponent} from "../../molecules/form-control-layout/form-control-layout.component";
import {FlexGroupComponent} from "../../templates/flex/flex-group.component";
import {PopoverComponent} from "../../templates/popover/popover.component";

@Component({
  selector: 'fui-date-picker',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ButtonEmptyComponent,
    ButtonIconComponent,
    InputFieldComponent,
    IconsComponent,
    FormControlLayoutComponent,
    FlexGroupComponent,
    PopoverComponent
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnInit {

  @Input() format: string = 'YYYY-MM-DD';
  @Input() dateFormControl: FormControl = new FormControl();
  @Input() isInvalid: boolean = false;
  @Output() isInvalidChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  selectedDate: dayjs.Dayjs | null = null;
  currentDate: dayjs.Dayjs;
  displayMonth: dayjs.Dayjs;
  weeks: Array<Array<{date: dayjs.Dayjs, selected: boolean}>> = [];

  selectedMonth: number;
  selectedYear: number;
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];

  constructor() {
    this.currentDate = dayjs();
    this.displayMonth = dayjs().startOf('month');
    this.selectedMonth = dayjs().month() + 1;
    this.selectedYear = dayjs().year();
    this.years = Array.from({ length: 15 }, (_, i) => dayjs().year() - 7 + i);
  }

  ngOnInit(): void {
    this.generateCalendar(this.displayMonth)
  }

  isSelected(date: dayjs.Dayjs): boolean {
    return this.selectedDate ? date.isSame(this.selectedDate, 'day'): false;
  }

  generateCalendar(month: dayjs.Dayjs): void {
    this.weeks = [];
    const startOfMonth = month.startOf('month');
    const endOfMonth = month.endOf('month');
    let startDate = startOfMonth.startOf('week');

    while (startDate.isBefore(endOfMonth.endOf('week'))) {
      const week: Array<{date: dayjs.Dayjs, selected: boolean}> = [];
      for (let i = 0; i < 7; i++) {
        week.push({date: startDate, selected: this.isSelected(startDate)});
        startDate = startDate.add(1, 'day');
      }
      this.weeks.push(week);
    }

    this.selectedMonth = month.month();
    this.selectedYear = month.year();
    this.years = Array.from({ length: 15 }, (_, i) => month.year() - 7 + i);
  }

  selectDate(date: dayjs.Dayjs): void {
    this.selectedDate = date;
    this.generateCalendar(this.displayMonth);
    this.dateFormControl = new FormControl(this.formatDate(this.selectedDate));
    this.isInvalid = false;
    this.isInvalidChange.emit(this.isInvalid);
    this.onChange.emit(this.dateFormControl.value);
  }

  prevMonth(): void {
    this.displayMonth = this.displayMonth.subtract(1, 'month');
    this.generateCalendar(this.displayMonth);
  }

  nextMonth(): void {
    this.displayMonth = this.displayMonth.add(1, 'month');
    this.generateCalendar(this.displayMonth);
  }

  formatDate(date: dayjs.Dayjs): string {
    return date.format(this.format);
  }

  changeMonth(): void {
    this.displayMonth = this.displayMonth.month(this.selectedMonth);
    this.generateCalendar(this.displayMonth);
  }

  changeYear(): void {
    this.displayMonth = this.displayMonth.year(this.selectedYear);
    this.generateCalendar(this.displayMonth);
  }

  changeTextInput(event: any): void {
    const inputValue = event.target.value;
    this.isInvalid = !this.validateDateInput(inputValue);
    this.isInvalidChange.emit(this.isInvalid);
    if (!this.isInvalid) {
      this.selectedDate = dayjs(inputValue, this.format, true);
      this.generateCalendar(this.displayMonth);
      this.onChange.emit(this.dateFormControl.value);
    }
  }

  validateDateInput(inputValue: string): boolean {
    dayjs.extend(customParseFormat);
    return dayjs(inputValue, this.format, true).isValid();
  }

}
