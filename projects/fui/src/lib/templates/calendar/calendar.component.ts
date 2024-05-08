import { Component, Input } from '@angular/core';
import {
  FlyoutBodyComponent,
  FlyoutComponent,
  FlyoutFooterComponent,
  FlyoutHeaderComponent,
  IconsComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from '../../../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventDTO } from './event.dto';

/**
 * The Calendar Component
 * @usage
 * ```html
 * <fui-calendar
     [events]="eventsInMay"
     [actions]="'modal'" />
 * ```
 * <example-url>http://localhost:4200/templates/calendar</example-url>
 */
@Component({
  selector: 'fui-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    FlyoutComponent,
    FlyoutHeaderComponent,
    FlyoutBodyComponent,
    FlyoutFooterComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  @Input() events: EventDTO[] = [];
  @Input() actions: 'flyout' | 'modal' = 'modal';

  /**
   * @ignore
   */
  eventShow!: EventDTO;
  nowMonth: string = '';
  nowDate: number = 0;
  nowYear: string = '';
  month: string[] = [
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
  year: string[] = [];
  selectedMonth: string = '';
  selectedYear: string = '';
  daysInMonth: { date: number; day: string; month: string }[] = [];
  weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: { date: number; day: string; month: string }[][] = [];
  prevMonth: string = 'April';
  nextMonth: string = 'June';
  isModalOpen: boolean = false;
  isOpenFlyout: boolean = false;

  /**
   * @ignore
   */
  constructor() {
    this.getDateNow();
    this.dateNow();
    this.initMonthValues(this.selectedMonth);
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.updateDaysInMonth();
  }

  /**
   * @ignore
   */
  initMonthValues(selectedMonth: string): void {
    const monthIndex = this.month.indexOf(selectedMonth);

    if (monthIndex === -1) {
      this.selectedMonth = this.month[0];
      this.prevMonth = this.month[this.month.length - 1];
      this.nextMonth = this.month[1];
    } else {
      if (monthIndex === 0) {
        this.prevMonth = this.month[this.month.length - 1];
      } else {
        this.prevMonth = this.month[monthIndex - 1];
      }

      if (monthIndex === this.month.length - 1) {
        this.nextMonth = this.month[0];
      } else {
        this.nextMonth = this.month[monthIndex + 1];
      }
    }
  }

  /**
   * @ignore
   */
  dateNow(): void {
    const currentYear: number = new Date().getFullYear();
    const years: string[] = [];
    for (let year = currentYear; year >= 2000; year--) {
      years.push(year.toString());
    }
    this.year = years;

    const currentDate = new Date();
    this.selectedMonth = this.month[currentDate.getMonth()];
    this.selectedYear = currentDate.getFullYear().toString();
  }

  /**
   * @ignore
   */
  updateDaysInMonth(): void {
    this.initMonthValues(this.selectedMonth);
    const monthIndex = this.month.indexOf(this.selectedMonth);
    const year = parseInt(this.selectedYear);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => {
      const date = i + 1;
      const dayIndex = new Date(year, monthIndex, date).getDay();
      const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex];
      return { date, day, month: this.selectedMonth };
    });

    this.generateWeeks();
  }

  /**
   * @ignore
   */
  private generateWeeks(): void {
    this.weeks = [];
    let currentWeek: { date: number; day: string; month: string }[] = [];
    let currentDayIndex = 0;

    const prevMonthLastDate = new Date(
      parseInt(this.selectedYear),
      this.month.indexOf(this.selectedMonth) - 1,
      0
    ).getDate();
    const firstDayIndex = new Date(
      parseInt(this.selectedYear),
      this.month.indexOf(this.selectedMonth),
      1
    ).getDay();
    for (let x = firstDayIndex; x > 0; x--) {
      const date = prevMonthLastDate - x + 1;
      const dayIndex = (7 + x) % 7;
      currentWeek.push({
        date,
        day: this.weekdays[dayIndex],
        month: this.prevMonth,
      });
      currentDayIndex++;
    }

    this.daysInMonth.forEach((day, index) => {
      currentWeek.push({
        date: day.date,
        day: day.day,
        month: this.selectedMonth,
      });
      currentDayIndex++;
      if (currentDayIndex % 7 === 0) {
        this.weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    const remainingDays = 7 - (currentDayIndex % 7);
    if (remainingDays < 7) {
      for (let x = 1; x <= remainingDays; x++) {
        const date = x;
        const dayIndex = (currentDayIndex + x) % 7;
        currentWeek.push({
          date,
          day: this.weekdays[dayIndex],
          month: this.nextMonth,
        });
      }
      this.weeks.push(currentWeek);
    }
  }

  /**
   * @ignore
   */
  openModal(obj: EventDTO) {
    this.eventShow = obj;
    this.isModalOpen = true;
  }

  /**
   * @ignore
   */
  handleOpenFlyout(obj: EventDTO): void {
    this.eventShow = obj;
    this.isOpenFlyout = true;
  }

  /**
   * @ignore
   */
  handleCloseModal() {
    this.isModalOpen = false;
  }

  /**
   * @ignore
   */
  handleCloseFlyout() {
    this.isOpenFlyout = false;
  }

  /**
   * @ignore
   */
  getDateNow(): void {
    const currentDateNow = new Date();
    const currentMonthIndex: number = currentDateNow.getMonth();
    this.nowMonth = this.month[currentMonthIndex];
    this.nowDate = currentDateNow.getDate();
    this.nowYear = currentDateNow.getFullYear().toString();
  }
}
