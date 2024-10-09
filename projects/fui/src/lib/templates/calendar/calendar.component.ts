import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ButtonIconComponent,
  FlyoutBodyComponent,
  FlyoutComponent,
  FlyoutHeaderComponent,
  FormControlLayoutComponent,
  IconsComponent,
  InputFieldComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  PopoverComponent,
  SelectFieldComponent,
  TextComponent,
} from '../../../public-api';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventDTO } from './event.dto';

/**
 * The Calendar Component
 * @usage
 * ```html
 * <fui-calendar
     [events]="eventsInMay"
     (actionEvent)="actionEvent($event)" />
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
    ButtonIconComponent,
    PopoverComponent,
    TextComponent,
    FormControlLayoutComponent,
    InputFieldComponent,
    SelectFieldComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  @Input() events: EventDTO[] = [];
  @Input() mode: 'simple' | 'advance' = 'simple';
  @Input() themeColor:
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'text'
    | 'accent' = 'text';
  @Output() actionEvent: EventEmitter<EventDTO> = new EventEmitter();

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
  selectedMonth: FormControl = new FormControl('');
  selectedYear: FormControl = new FormControl('');
  monthOption: {
    label: string;
    value: any;
  }[] = [];
  yearOption: {
    label: string;
    value: any;
  }[] = [];

  daysInMonth: { date: number; day: string; month: string }[] = [];
  weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: { date: number; day: string; month: string }[][] = [];
  prevMonth: string = 'April';
  nextMonth: string = 'June';

  hours: string[] = Array.from({ length: 24 }, (_, i) => this.formatHour(i));
  today: Date = new Date();
  eventToday: EventDTO[] = [];

  /** Modal Create Event */
  isOpenCreateEvent: boolean = false;

  /**
   * @ignore
   */
  constructor() {
    this.getDateNow();
    this.dateNow();
    this.initMonthValues(this.selectedMonth.value);
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.updateDaysInMonth();
    this.restructureMonth();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.getEventToday();
    }
  }

  private formatHour(hour: number): string {
    return `${hour < 10 ? '0' : ''}${hour}:00`;
  }

  restructureMonth(): void {
    if (this.month.length > 0 && this.year.length > 0) {
      this.month.forEach((item) => {
        return this.monthOption.push({
          label: item,
          value: item,
        });
      });
      this.year.forEach((item) => {
        return this.yearOption.push({
          label: item,
          value: item,
        });
      });
    }
  }

  getEventToday(): void {
    if (this.events.length > 0) {
      this.events.forEach((item) => {
        if (item.date === this.today.getDate()) {
          this.eventToday.unshift(item);
        }
      });
    }
  }

  /**
   * @ignore
   */
  initMonthValues(selectedMonth: string): void {
    const monthIndex = this.month.indexOf(selectedMonth);

    if (monthIndex === -1) {
      this.selectedMonth.setValue(this.month[0]);
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
    this.selectedMonth.setValue(this.month[currentDate.getMonth()]);
    this.selectedYear.setValue(currentDate.getFullYear().toString());
  }

  /**
   * @ignore
   */
  updateDaysInMonth(): void {
    this.initMonthValues(this.selectedMonth.value);
    const monthIndex = this.month.indexOf(this.selectedMonth.value);
    const year = parseInt(this.selectedYear.value);
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => {
      const date = i + 1;
      const dayIndex = new Date(year, monthIndex, date).getDay();
      const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex];
      return { date, day, month: this.selectedMonth.value };
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
      parseInt(this.selectedYear.value),
      this.month.indexOf(this.selectedMonth.value) - 1,
      0
    ).getDate();
    const firstDayIndex = new Date(
      parseInt(this.selectedYear.value),
      this.month.indexOf(this.selectedMonth.value),
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
        month: this.selectedMonth.value,
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
  parseData(obj: EventDTO): void {
    this.actionEvent.emit(obj);
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

  onPrevMonth(): void {
    let monthIndex = this.month.indexOf(this.selectedMonth.value);
    if (monthIndex === 0) {
      monthIndex = this.month.length - 1;
      this.selectedYear.setValue(
        (parseInt(this.selectedYear.value) - 1).toString()
      );
    } else {
      monthIndex -= 1;
    }

    this.selectedMonth.setValue(this.month[monthIndex]);
    this.updateDaysInMonth();
  }

  onNextMonth(): void {
    let monthIndex = this.month.indexOf(this.selectedMonth.value);
    if (monthIndex === this.month.length - 1) {
      monthIndex = 0;
      this.selectedYear.setValue(
        (parseInt(this.selectedYear.value) + 1).toString()
      );
    } else {
      monthIndex += 1;
    }

    this.selectedMonth.setValue(this.month[monthIndex]);
    this.updateDaysInMonth();
  }

  timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  getEventHeight(event: EventDTO): number {
    const startMinutes = this.timeToMinutes(event.event.start);
    const endMinutes = this.timeToMinutes(event.event.end);
    const duration = endMinutes - startMinutes; // Duration in minutes

    // Set a base height per minute (e.g., 2px per minute)
    const heightPerMinute = 2; // Adjust this value as needed
    return duration * heightPerMinute;
  }

  handleCreateEventModal(): void {
    this.isOpenCreateEvent = !this.isOpenCreateEvent;
  }
}
