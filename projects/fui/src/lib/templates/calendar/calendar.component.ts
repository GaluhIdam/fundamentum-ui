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
import { EventDTO, EventPerdateDTO } from './event.dto';

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

  daysInMonth: {
    date: number;
    day: string;
    month: string;
  }[] = [];
  weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weeks: { date: number; day: string; month: string }[][] = [];
  prevMonth: string = '';
  nextMonth: string = '';

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
      if (this.events.length > 0) {
        const cleanedEvents = this.cleanAndGroupEvents(this.events);
        console.log('clean', cleanedEvents);

        const z = this.filterEventsByMinimumDate(cleanedEvents);
        console.log('filter', z);

        const result = this.filterAndCountEvents(this.events);
        console.log('result', result);

        const v = this.removeDuplicateEvents(this.events, cleanedEvents);

        console.log('remove', v);

        const a = [...z, ...v];
        console.log('merge', a);
      }
    }
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
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
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
   * Get date now
   */
  getDateNow(): void {
    const currentDateNow = new Date();
    const currentMonthIndex: number = currentDateNow.getMonth();
    this.nowMonth = this.month[currentMonthIndex];
    this.nowDate = currentDateNow.getDate();
    this.nowYear = currentDateNow.getFullYear().toString();
  }

  /** Toggle for previos month */
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

  /** Toggle for next month */
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

  handleCreateEventModal(): void {
    this.isOpenCreateEvent = !this.isOpenCreateEvent;
  }

  cleanAndGroupEvents(events: EventDTO[]): EventDTO[] {
    const eventMap = new Map<string, EventDTO[]>();
    const sameEvent: EventDTO[] = [];

    // Group events by a unique key combining title, subtitle, month, and year
    events.forEach((event) => {
      const key = `${event.event.title}-${event.event.subTitle}-${event.month}-${event.year}`;
      if (!eventMap.has(key)) {
        eventMap.set(key, []);
      }
      eventMap.get(key)?.push(event);
    });

    // Iterate over each group of events
    eventMap.forEach((eventGroup) => {
      // Sort the group by date (in case they are not sorted)
      const sortedGroup = eventGroup.sort((a, b) => a.date - b.date);
      let previousDate = null;
      const sequentialEvents: EventDTO[] = [];

      // Check for sequential dates
      for (const event of sortedGroup) {
        if (previousDate === null || event.date === previousDate + 1) {
          sequentialEvents.push(event);
        } else {
          // If we encounter a gap, check if we have sequential events to add to sameEvent
          if (sequentialEvents.length > 1) {
            sameEvent.push(...sequentialEvents);
          }
          sequentialEvents.length = 0; // Reset for the next sequence
        }
        previousDate = event.date;
      }

      // Check for any remaining sequential events
      if (sequentialEvents.length > 1) {
        sameEvent.push(...sequentialEvents);
      }
    });
    return sameEvent;
  }

  removeDuplicateEvents(
    events: EventDTO[],
    duplicates: EventDTO[]
  ): EventDTO[] {
    const duplicatesSet = new Set(
      duplicates.map(
        (duplicate) =>
          `${duplicate.date}-${duplicate.year}-${duplicate.month}-${duplicate.event.title}-${duplicate.event.subTitle}`
      )
    );

    return events.filter((event) => {
      const eventKey = `${event.date}-${event.year}-${event.month}-${event.event.title}-${event.event.subTitle}`;
      if (duplicatesSet.has(eventKey)) {
        duplicatesSet.delete(eventKey); // Remove the key to keep the first occurrence
        return false; // Filter out the duplicate
      }
      return true; // Keep the unique event
    });
  }

  filterEventsByMinimumDate(events: EventDTO[]): EventDTO[] {
    // Find the minimum date
    const minDate = Math.min(...events.map((event) => event.date));

    // Return only events that match the minimum date
    return events.filter((event) => event.date === minDate);
  }

  filterAndCountEvents(events: EventDTO[]): any[] {
    // Find the minimum date
    const minDate = Math.min(...events.map((event) => event.date));

    // Filter events by minimum date
    const filteredEvents = events.filter((event) => event.date === minDate);

    // Count occurrences of each unique event based on multiple properties
    const eventCount = filteredEvents.reduce((acc, event) => {
      const key = JSON.stringify({
        title: event.event.title,
        subTitle: event.event.subTitle,
        color: event.color,
        start: event.event.start,
        end: event.event.end,
        place: event.event.place,
        description: event.event.description,
      });

      if (!acc[key]) {
        acc[key] = { event: { ...event }, total: 0 };
      }
      acc[key].total++;
      return acc;
    }, {} as Record<string, any>);

    // Convert the result back to an array
    return Object.values(eventCount);
  }
}
