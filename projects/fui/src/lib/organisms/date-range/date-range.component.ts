import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormsModule} from "@angular/forms";
import {DatePickerComponent} from "../date-picker/date-picker.component";
import {IconsComponent} from "../../atoms/icons/icons.component";
import {MinuteInterval, TimeFormat} from "../../types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {ButtonIconComponent} from "../../molecules/button-icon/button-icon.component";
import {FlexGroupComponent} from "../../templates/flex/flex-group.component";
import {InputFieldComponent} from "../../molecules/form-control-layout/input-field/input-field.component";
import {NgForOf} from "@angular/common";
import {PopoverComponent} from "../../templates/popover/popover.component";
import {b} from "vite/dist/node/types.d-aGj9QkWt";

@Component({
  selector: 'fui-date-range',
  standalone: true,
  imports: [
    DatePickerComponent,
    IconsComponent,
    ButtonIconComponent,
    FlexGroupComponent,
    FormsModule,
    InputFieldComponent,
    NgForOf,
    PopoverComponent
  ],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.scss'
})
export class DateRangeComponent {

  @Input() startDateControl:FormControl = new FormControl();
  @Input() endDateControl:FormControl = new FormControl();

  @Input() dateFormat: string = 'YYYY-MM-DD';
  @Input() timeFormat: TimeFormat = "12h";
  @Input() minuteInterval: MinuteInterval = "30 minutes";
  @Input() showTimeOptions: boolean = false;

  @Input() isInvalidStartDate: boolean = false;
  @Output() isInvalidStartDateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() isInvalidEndDate: boolean = false;
  @Output() isInvalidEndDateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onChangeStartDate: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChangeEndDate: EventEmitter<string> = new EventEmitter<string>();

  placeholder: string = "";
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [];
  weeks: Array<Array<{date: dayjs.Dayjs, selected: boolean, betweenRange: boolean}>> = [];
  timeOptions: Array<{time: dayjs.Dayjs, selected: boolean}> = [];

  displayMonth: dayjs.Dayjs | null = null;

  selectedStartDate: dayjs.Dayjs | null = null;
  selectedEndDate: dayjs.Dayjs | null = null;
  selectedStartMonth: number | null = null;
  selectedEndMonth: number | null = null;
  selectedStartYear: number | null = null;
  selectedEndYear: number | null = null;
  selectedStartTime: dayjs.Dayjs | null = null;
  selectedEndTime: dayjs.Dayjs | null = null;

  constructor() {
    this.years = Array.from({ length: 15 }, (_, i) => dayjs().year() - 7 + i);
  }

  ngOnInit(): void {
    this.placeholder = this.dateFormat;
    if (this.showTimeOptions) {
      this.placeholder = this.placeholder + ' ' + (this.timeFormat === "12h"? 'HH:MM AM': 'HH:MM');
    }
  }

  isDateSelected(date: dayjs.Dayjs, selectedDate: dayjs.Dayjs | null): boolean {
    if (selectedDate === null) {
      return false;
    }
    return date.isSame(selectedDate, 'day');
  }

  isBetweenRange(date: dayjs.Dayjs, selectedStartDate: dayjs.Dayjs | null, selectedEndDate: dayjs.Dayjs | null): boolean {
    if (selectedStartDate === null) {
      return false;
    }
    if (selectedEndDate === null) {
      return false;
    }
    return date.isAfter(selectedStartDate, 'day') && date.isBefore(selectedEndDate, 'day');
  }

  isTimeSelected(time: dayjs.Dayjs, selectedTime: dayjs.Dayjs | null): boolean {
    if (selectedTime === null) {
      return false;
    }
    let interval: number = this.generateMinuteInterval();

    const roundedMinute: number = Math.trunc(selectedTime.minute() / interval) * interval;
    const isSameHour = time.hour() === selectedTime.hour();
    const isSameMinute = time.minute() === roundedMinute;
    return isSameHour && isSameMinute;
  }

  generateCalendar(month: dayjs.Dayjs, isStartDate: boolean): void {
    this.weeks = [];
    const startOfMonth = month.startOf('month');
    const endOfMonth = month.endOf('month');
    let startDate = startOfMonth.startOf('week');

    while (startDate.isBefore(endOfMonth.endOf('week'))) {
      const week: Array<{date: dayjs.Dayjs, selected: boolean, betweenRange: boolean}> = [];
      for (let i = 0; i < 7; i++) {
        week.push({date: startDate
          , selected: this.isDateSelected(startDate, this.selectedStartDate) || this.isDateSelected(startDate, this.selectedEndDate)
          , betweenRange: this.isBetweenRange(startDate, this.selectedStartDate, this.selectedEndDate)});
        startDate = startDate.add(1, 'day');
      }
      this.weeks.push(week);
    }

    if (isStartDate) {
      this.selectedStartMonth = month.month();
      this.selectedStartYear = month.year();
    } else {
      this.selectedEndMonth = month.month();
      this.selectedEndYear = month.year();
    }

    this.years = Array.from({ length: 15 }, (_, i) => month.year() - 7 + i);

    this.generateTimeOptions(isStartDate);
  }

  selectDate(date: dayjs.Dayjs, isStartDate: boolean): void {
    if (isStartDate) {
      this.selectedStartDate = date;
    } else {
      this.selectedEndDate = date;
    }
    this.displayMonth = date;
    this.generateCalendar(this.displayMonth, isStartDate);
    if (!this.showTimeOptions) {
      if (isStartDate) {
        if (this.selectedStartDate) {
          this.startDateControl = new FormControl(this.formatDate(this.selectedStartDate));
          this.isInvalidStartDate = false;
          this.isInvalidStartDateChange.emit(this.isInvalidStartDate);
          this.onChangeStartDate.emit(this.startDateControl.value);
        }
      } else{
        if (this.selectedEndDate) {
          this.endDateControl = new FormControl(this.formatDate(this.selectedEndDate));
          this.isInvalidEndDate = false;
          this.isInvalidEndDateChange.emit(this.isInvalidEndDate);
          this.onChangeEndDate.emit(this.endDateControl.value);
        }
      }

    }
  }

  selectTime(time: dayjs.Dayjs, isStartDate: boolean): void {
    this.generateTimeOptions(isStartDate);
    if (isStartDate) {
      this.selectedStartTime = time;

      if (this.selectedStartDate) {
        const date: string = this.formatDate(this.selectedStartDate);
        const time: string = this.formatTime(this.selectedStartTime);
        this.startDateControl = new FormControl(date + " " + time);
        this.isInvalidStartDate = false;
        this.isInvalidStartDateChange.emit(this.isInvalidStartDate);
        this.onChangeStartDate.emit(this.startDateControl.value);
      }
    } else {
      this.selectedEndTime = time;

      if (this.selectedEndDate) {
        const date: string = this.formatDate(this.selectedEndDate);
        const time: string = this.formatTime(this.selectedEndTime);
        this.endDateControl = new FormControl(date + " " + time);
        this.isInvalidEndDate = false;
        this.isInvalidEndDateChange.emit(this.isInvalidEndDate);
        this.onChangeEndDate.emit(this.endDateControl.value);
      }
    }
  }

  prevMonth(isStartDate: boolean): void {
    if (this.displayMonth) {
      this.displayMonth = this.displayMonth.subtract(1, 'month');
      this.generateCalendar(this.displayMonth, isStartDate);
    }
  }

  nextMonth(isStartDate: boolean): void {
    if (this.displayMonth) {
      this.displayMonth = this.displayMonth.add(1, 'month');
      this.generateCalendar(this.displayMonth, isStartDate);
    }
  }

  formatDate(date: dayjs.Dayjs): string {
    return date.format(this.dateFormat);
  }

  formatTime(date: dayjs.Dayjs): string {
    if (this.timeFormat === "12h") {
      return date.format("hh:mm A");
    } else {
      return date.format("HH:mm");
    }
  }

  changeMonth(month: any, isStartDate: boolean): void {
    if (!this.displayMonth) {
      return;
    }
    if (isStartDate) {
      this.selectedStartMonth = month;
    } else {
      this.selectedEndMonth = month;
    }

    this.displayMonth = this.displayMonth.month(month);
    this.generateCalendar(this.displayMonth, isStartDate);
  }

  changeYear(year: any, isStartDate: boolean): void {
    if (!this.displayMonth) {
      return;
    }
    if (isStartDate) {
      this.selectedStartYear = year;
    } else {
      this.selectedEndYear = year;
    }

    this.displayMonth = this.displayMonth.year(year);
    this.generateCalendar(this.displayMonth, isStartDate);
  }

  changeTextInput(event: any, isStartDate: boolean): void {
    const inputValue = event.target.value;
    let format: string = this.dateFormat;
    if (this.showTimeOptions) {
      format = format +  ' ' + (this.timeFormat === "12h"? 'hh:mm A': 'HH:mm');
    }

    if (isStartDate) {
      this.isInvalidStartDate = !this.validateDateInput(inputValue);
      this.isInvalidStartDateChange.emit(this.isInvalidStartDate);
      if (!this.isInvalidStartDate) {
        this.selectedStartDate = dayjs(inputValue, format, true);
        if (this.showTimeOptions) {
          this.selectedStartTime = this.selectedStartDate;
        }
        this.onChangeStartDate.emit(this.startDateControl.value);
      }
    } else {
      this.isInvalidEndDate = !this.validateDateInput(inputValue);
      this.isInvalidEndDateChange.emit(this.isInvalidEndDate);
      if (!this.isInvalidEndDate) {
        this.selectedEndDate = dayjs(inputValue, format, true);
        if (this.showTimeOptions) {
          this.selectedEndTime = this.selectedEndDate;
        }
        this.onChangeEndDate.emit(this.endDateControl.value);
      }
    }

    if (this.displayMonth) {
      this.generateCalendar(this.displayMonth, isStartDate);
    }
  }

  validateDateInput(inputValue: string): boolean {
    dayjs.extend(customParseFormat);
    let format: string = this.dateFormat;
    if (this.showTimeOptions) {
      format = format +  ' ' + (this.timeFormat === "12h"? 'hh:mm A': 'HH:mm');
    }
    return dayjs(inputValue, format, true).isValid();
  }

  generateTimeOptions(isStartDate: boolean): void {
    if (this.showTimeOptions) {
      let selectedTime = this.selectedEndTime;
      if (isStartDate) {
        selectedTime = this.selectedStartTime;
      }
      this.timeOptions = [];
      let interval: number = this.generateMinuteInterval();
      const minutesSize = 60 / interval;
      for (let i = 0; i < 24; i++) {
        for (let j = 0; j < minutesSize; j++) {
          const timeOption = dayjs().hour(i).minute(j * interval);
          this.timeOptions.push({time: timeOption, selected: this.isTimeSelected(timeOption, selectedTime)});
        }
      }
    }

  }

  generateMinuteInterval(): number {
    let interval: number = 30;
    if (this.minuteInterval === "1 minute") {
      interval = 1;
    } else if (this.minuteInterval === "5 minutes") {
      interval = 5;
    } else if (this.minuteInterval === "10 minutes") {
      interval = 10;
    } else if (this.minuteInterval === "15 minutes") {
      interval = 15;
    }
    return interval;
  }

  onStartDateClick() {
    if (this.selectedStartDate) {
      this.displayMonth = this.selectedStartDate;
    } else {
      this.displayMonth = dayjs();
    }
    this.selectedStartMonth = this.displayMonth.month();
    this.selectedStartYear = this.displayMonth.year();
    this.generateCalendar(this.displayMonth, true);
  }

  onEndDateClick() {
    if (this.selectedEndDate) {
      this.displayMonth = this.selectedEndDate;
    } else {
      this.displayMonth = dayjs();
    }
    this.selectedEndMonth = this.displayMonth.month();
    this.selectedEndYear = this.displayMonth.year();
    this.generateCalendar(this.displayMonth, false);
  }
}
