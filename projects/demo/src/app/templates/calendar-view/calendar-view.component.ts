import { Component } from '@angular/core';
import {
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
  ],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss',
})
export class CalendarViewComponent {
  eventsInMay: EventDTO[] = [
    {
      date: 1,
      year: '2024',
      month: 'May',
      color: 'success',
      event: {
        title: 'Tech Conference',
        subTitle: 'Innovation Summit',
        start: '9:00 AM',
        end: '6:00 PM',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 2,
      year: '2024',
      month: 'May',
      color: 'success',
      event: {
        title: 'Tech Conference',
        subTitle: 'Innovation Summit',
        start: '9:00 AM',
        end: '6:00 PM',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 3,
      year: '2024',
      month: 'May',
      color: 'success',
      event: {
        title: 'Tech Conference',
        subTitle: 'Innovation Summit',
        start: '9:00 AM',
        end: '6:00 PM',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 1,
      year: '2024',
      month: 'May',
      color: 'warning',
      event: {
        title: 'Offline Induction',
        subTitle: 'Quantum Demonstration',
        start: '9:00 AM',
        end: '6:00 PM',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 1,
      year: '2024',
      month: 'May',
      color: 'primary',
      event: {
        title: 'Training',
        subTitle: 'Work Safety in office',
        start: '9:00 AM',
        end: '6:00 PM',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 1,
      year: '2024',
      month: 'May',
      color: 'danger',
      event: {
        title: 'Spiderman Work From Home',
        subTitle: 'Watch Movie for 1 hour',
        start: '9:00 AM',
        end: '6:00 PM',
        place: 'Convention Center',
        description:
          'Join us for a day of groundbreaking discussions on innovation.',
      },
    },
    {
      date: 5,
      year: '2024',
      month: 'May',
      color: 'warning',
      event: {
        title: 'Product Launch',
        subTitle: 'New Product Showcase',
        start: '11:00 AM',
        end: '1:00 PM',
        place: 'Company Headquarters',
        description: 'Be the first to see our latest product offerings.',
      },
    },
    {
      date: 10,
      year: '2024',
      month: 'May',
      color: 'danger',
      event: {
        title: 'Workshop',
        subTitle: 'Data Analytics Workshop',
        start: '10:00 AM',
        end: '4:00 PM',
        place: 'Tech Hub',
        description: 'Learn about the latest techniques in data analysis.',
      },
    },
    {
      date: 12,
      year: '2024',
      month: 'May',
      color: 'primary',
      event: {
        title: 'Seminar',
        subTitle: 'Cybersecurity Seminar',
        start: '2:00 PM',
        end: '5:00 PM',
        place: 'Conference Room A',
        description: 'Explore the challenges and solutions in cybersecurity.',
      },
    },
    {
      date: 15,
      year: '2024',
      month: 'May',
      color: 'success',
      event: {
        title: 'Hackathon',
        subTitle: 'CodeFest Hackathon',
        start: '9:00 AM',
        end: '7:00 PM',
        place: 'Innovation Lab',
        description:
          'Compete with other developers to solve real-world challenges.',
      },
    },
    {
      date: 18,
      year: '2024',
      month: 'May',
      color: 'primary',
      event: {
        title: 'Panel Discussion',
        subTitle: 'Future of AI',
        start: '3:00 PM',
        end: '5:00 PM',
        place: 'Auditorium',
        description: 'Experts discuss the potential impact of AI on society.',
      },
    },
    {
      date: 20,
      year: '2024',
      month: 'May',
      color: 'primary',
      event: {
        title: 'Networking Event',
        subTitle: 'Tech Mixer',
        start: '6:00 PM',
        end: '8:00 PM',
        place: 'Sky Lounge',
        description: 'Connect with professionals in the tech industry.',
      },
    },
    {
      date: 23,
      year: '2024',
      month: 'May',
      color: 'primary',
      event: {
        title: 'Seminar',
        subTitle: 'Blockchain Basics',
        start: '10:00 AM',
        end: '12:00 PM',
        place: 'Training Room',
        description: 'An introduction to blockchain technology for beginners.',
      },
    },
    {
      date: 27,
      year: '2024',
      month: 'May',
      color: 'primary',
      event: {
        title: 'Webinar',
        subTitle: 'E-commerce Trends',
        start: '2:00 PM',
        end: '3:30 PM',
        place: 'Online',
        description:
          'Discover the latest trends shaping the e-commerce industry.',
      },
    },
    {
      date: 30,
      year: '2024',
      month: 'May',
      color: 'primary',
      event: {
        title: 'Training',
        subTitle: 'Agile Development Workshop',
        start: '9:00 AM',
        end: '4:00 PM',
        place: 'Tech Center',
        description:
          'Learn how to implement agile methodologies in your projects.',
      },
    },
  ];
  eventShow!: EventDTO;
  isModalOpen: boolean = false;
  isOpenFlyout: boolean = false;
  active: boolean = true;

  actionEvent(event: EventDTO): void {
    this.eventShow = event;
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
