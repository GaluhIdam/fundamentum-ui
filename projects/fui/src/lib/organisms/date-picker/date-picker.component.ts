import {Component, OnInit} from '@angular/core';
import dayjs from "dayjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'fui-date-picker',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnInit {
  currentDate: dayjs.Dayjs;
  displayMonth: dayjs.Dayjs;
  weeks: Array<Array<{date: dayjs.Dayjs, selected: boolean}>> = [];
  selectedDate: dayjs.Dayjs | null = null;
  selectedMonth: number;
  selectedYear: number;
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {
    this.currentDate = dayjs();
    this.displayMonth = dayjs().startOf('month');
    this.selectedMonth = dayjs().month() + 1;
    this.selectedYear = dayjs().year();

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
  }

  selectDate(date: dayjs.Dayjs): void {
    this.selectedDate = date;
    this.generateCalendar(this.displayMonth);
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
    return date.format('YYYY-MM-DD');
  }
}
