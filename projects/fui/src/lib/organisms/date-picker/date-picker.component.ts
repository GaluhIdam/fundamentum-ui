import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { NgForOf } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { ButtonEmptyComponent } from '../../atoms/button-empty/button-empty.component';
import { ButtonIconComponent } from '../../molecules/button-icon/button-icon.component';
import { InputFieldComponent } from '../../molecules/form-control-layout/input-field/input-field.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { FormControlLayoutComponent } from '../../molecules/form-control-layout/form-control-layout.component';
import { FlexGroupComponent } from '../../templates/flex/flex-group.component';
import { PopoverComponent } from '../../templates/popover/popover.component';
import { MinuteInterval, TimeFormat } from '../../types';
import { ValidatorFieldComponent } from '../../../public-api';

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
    PopoverComponent,
    ValidatorFieldComponent,
  ],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  @Input() dateFormat: string = 'YYYY-MM-DD';
  @Input() timeFormat: TimeFormat = '12h';
  @Input() minuteInterval: MinuteInterval = '30 minutes';
  @Input() showTimeOptions: boolean = false;
  @Input() dateFormControl: FormControl = new FormControl();

  @Input() isInvalid: boolean = false;
  @Input() message: string = 'This is required!';
  @Output() isInvalidChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  placeholder: string = '';
  preventClose: boolean = true;

  selectedDate: dayjs.Dayjs | null = null;
  currentDate: dayjs.Dayjs;
  displayMonth: dayjs.Dayjs;
  weeks: Array<Array<{ date: dayjs.Dayjs; selected: boolean }>> = [];
  selectedMonth: number;
  selectedYear: number;
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = [];

  selectedTime: dayjs.Dayjs | null = null;
  timeOptions: Array<{ time: dayjs.Dayjs; selected: boolean }> = [];

  constructor() {
    this.currentDate = dayjs();
    this.displayMonth = dayjs().startOf('month');
    this.selectedMonth = dayjs().month() + 1;
    this.selectedYear = dayjs().year();
    this.years = Array.from({ length: 15 }, (_, i) => dayjs().year() - 7 + i);
  }

  ngOnInit(): void {
    this.placeholder = this.dateFormat;
    if (this.showTimeOptions) {
      this.placeholder =
        this.placeholder +
        ' ' +
        (this.timeFormat === '12h' ? 'HH:MM AM' : 'HH:MM');
    }
    this.generateCalendar(this.displayMonth);
  }

  isDateSelected(date: dayjs.Dayjs): boolean {
    return this.selectedDate ? date.isSame(this.selectedDate, 'day') : false;
  }

  isTimeSelected(time: dayjs.Dayjs): boolean {
    if (!this.selectedTime) {
      return false;
    }
    let interval: number = this.generateMinuteInterval();
    const roundedMinute: number =
      Math.trunc(this.selectedTime.minute() / interval) * interval;
    const isSameHour = time.hour() === this.selectedTime.hour();
    const isSameMinute = time.minute() === roundedMinute;
    return isSameHour && isSameMinute;
  }

  generateCalendar(month: dayjs.Dayjs): void {
    this.weeks = [];
    const startOfMonth = month.startOf('month');
    const endOfMonth = month.endOf('month');
    let startDate = startOfMonth.startOf('week');

    while (startDate.isBefore(endOfMonth.endOf('week'))) {
      const week: Array<{ date: dayjs.Dayjs; selected: boolean }> = [];
      for (let i = 0; i < 7; i++) {
        week.push({
          date: startDate,
          selected: this.isDateSelected(startDate),
        });
        startDate = startDate.add(1, 'day');
      }
      this.weeks.push(week);
    }

    this.selectedMonth = month.month();
    this.selectedYear = month.year();
    this.years = Array.from({ length: 15 }, (_, i) => month.year() - 7 + i);

    this.generateTimeOptions();
  }

  selectDate(date: dayjs.Dayjs): void {
    this.selectedDate = date;
    this.generateCalendar(this.displayMonth);
    if (!this.showTimeOptions) {
      this.preventClose = false;
      this.dateFormControl.setValue(this.formatDate(this.selectedDate));
      this.isInvalid = false;
      this.isInvalidChange.emit(this.isInvalid);
      this.onChange.emit(this.dateFormControl.value);
    } else {
      this.preventClose = false;
      this.dateFormControl.setValue(this.formatDate(this.selectedDate));
      this.isInvalid = false;
      this.isInvalidChange.emit(this.isInvalid);
      this.onChange.emit(this.dateFormControl.value);
    }
  }

  selectTime(time: dayjs.Dayjs): void {
    this.selectedTime = time;
    this.preventClose = false;
    if (this.selectedDate) {
      this.generateTimeOptions();
      const date: string = this.formatDate(this.selectedDate);
      const time: string = this.formatTime(this.selectedTime);
      this.dateFormControl.setValue(date + ' ' + time);
      this.isInvalid = false;
      this.isInvalidChange.emit(this.isInvalid);
      this.onChange.emit(this.dateFormControl.value);
    }
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
    return date.format(this.dateFormat);
  }

  formatTime(date: dayjs.Dayjs): string {
    if (this.timeFormat === '12h') {
      return date.format('hh:mm A');
    } else {
      return date.format('HH:mm');
    }
  }

  changeMonth(month: any): void {
    this.selectedMonth = month;
    this.displayMonth = this.displayMonth.month(this.selectedMonth);
    this.generateCalendar(this.displayMonth);
  }

  changeYear(year: any): void {
    this.selectedYear = year;
    this.displayMonth = this.displayMonth.year(this.selectedYear);
    this.generateCalendar(this.displayMonth);
  }

  changeTextInput(event: any): void {
    const inputValue = event.target.value;
    this.isInvalid = !this.validateDateInput(inputValue);
    this.isInvalidChange.emit(this.isInvalid);
    if (!this.isInvalid) {
      let format: string = this.dateFormat;
      if (this.showTimeOptions) {
        format =
          format + ' ' + (this.timeFormat === '12h' ? 'hh:mm A' : 'HH:mm');
      }
      this.selectedDate = dayjs(inputValue, format, true);
      if (this.showTimeOptions) {
        this.selectedTime = this.selectedDate;
      }
      this.generateCalendar(this.displayMonth);
      this.onChange.emit(this.dateFormControl.value);
    }
  }

  validateDateInput(inputValue: string): boolean {
    dayjs.extend(customParseFormat);
    let format: string = this.dateFormat;
    if (this.showTimeOptions) {
      format = format + ' ' + (this.timeFormat === '12h' ? 'hh:mm A' : 'HH:mm');
    }
    return dayjs(inputValue, format, true).isValid();
  }

  generateTimeOptions(): void {
    if (this.showTimeOptions) {
      this.timeOptions = [];
      let interval: number = this.generateMinuteInterval();
      const minutesSize = 60 / interval;
      for (let i = 0; i < 24; i++) {
        for (let j = 0; j < minutesSize; j++) {
          const timeOption = dayjs()
            .hour(i)
            .minute(j * interval);
          this.timeOptions.push({
            time: timeOption,
            selected: this.isTimeSelected(timeOption),
          });
        }
      }
    }
  }

  generateMinuteInterval(): number {
    let interval: number = 30;
    if (this.minuteInterval === '1 minute') {
      interval = 1;
    } else if (this.minuteInterval === '5 minutes') {
      interval = 5;
    } else if (this.minuteInterval === '10 minutes') {
      interval = 10;
    } else if (this.minuteInterval === '15 minutes') {
      interval = 15;
    }
    return interval;
  }

  reset(): void {
    this.selectedDate = null;
    this.selectedTime = null;
    this.dateFormControl.reset();
    this.generateCalendar(this.currentDate);
    if (this.showTimeOptions) {
      this.generateTimeOptions();
    }
  }
}
