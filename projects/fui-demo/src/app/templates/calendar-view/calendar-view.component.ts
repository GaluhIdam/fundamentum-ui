import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  CalendarComponent,
  EventDTO,
  FilterGroupButtonComponent,
  FilterGroupComponent,
  FlyoutBodyComponent,
  FlyoutComponent,
  FlyoutHeaderComponent,
  IconsComponent,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
} from 'fui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    FlyoutComponent,
    FlyoutHeaderComponent,
    FlyoutBodyComponent,
    IconsComponent,
    FilterGroupComponent,
    FilterGroupButtonComponent,
    ButtonIconComponent,
  ],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss',
})
export class CalendarViewComponent {
  themeColor: 'primary' | 'success' | 'warning' | 'danger' | 'text' | 'accent' =
    'primary';
  months = [
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
  dateNow: Date = new Date();
  eventsInMay: EventDTO[] = [
    {
      date: 1,
      year: '2024',
      month: 'October',
      color: 'success',
      event: {
        title: 'Tech Conference Batch 1',
        subTitle: 'Innovation Summit',
        start: '09:00',
        end: '10:00',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 9,
      year: '2024',
      month: 'October',
      color: 'danger',
      event: {
        title: 'Magic Test',
        subTitle: 'Innovation Summit',
        start: '10:00',
        end: '12:00',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 9,
      year: '2024',
      month: 'October',
      color: 'success',
      event: {
        title: 'Tech Conference Batch 2',
        subTitle: 'Innovation Summit',
        start: '10:00',
        end: '12:00',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 15,
      year: '2024',
      month: 'October',
      color: 'success',
      event: {
        title: 'Tech Conference Batch 2',
        subTitle: 'Innovation Summit',
        start: '10:00',
        end: '12:00',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 10,
      year: '2024',
      month: 'October',
      color: 'danger',
      event: {
        title: 'Magic Test',
        subTitle: 'Innovation Summit',
        start: '15:00',
        end: '18:00',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 9,
      year: '2024',
      month: 'October',
      color: 'danger',
      event: {
        title: 'Test',
        subTitle: 'test',
        start: '10:00',
        end: '12:00',
        place: 'Maratua Room',
        description: 'Nothing',
      },
    },
    {
      date: 10,
      year: '2024',
      month: 'October',
      color: 'danger',
      event: {
        title: 'Sprint Review',
        subTitle: 'Review result',
        start: '10:00',
        end: '12:00',
        place: 'Maratua Room',
        description: 'Nothing',
      },
    },
    {
      date: 10,
      year: '2024',
      month: 'October',
      color: 'success',
      event: {
        title: 'Tech Conference Batch 2',
        subTitle: 'Innovation Summit',
        start: '10:00',
        end: '12:00',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 31,
      year: '2024',
      month: 'September',
      color: 'success',
      event: {
        title: 'Training',
        subTitle: 'Life Training',
        start: '09:00',
        end: '10:00',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
  ];

  eventShow!: EventDTO;
  isModalOpen: boolean = false;
  isOpenFlyout: boolean = false;
  active: boolean = true;

  actionEvent(event: EventDTO): void {
    this.eventShow = event;
    console.log(event);
    if (this.active) {
      this.handleModal();
    } else {
      this.handleFlyout();
    }
  }

  handleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }
  handleFlyout(): void {
    this.isOpenFlyout = !this.isOpenFlyout;
  }

  test(event: any): void {
    console.log(event);
  }

  onOff(value: boolean): void {
    this.active = value;
  }
}
