import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  AdvanceFilterComponent,
  AdvanceFilterItemComponent,
  AdvanceFilterSectionComponent,
  ButtonIconComponent,
  ComboBoxComponent,
  DateRangeComponent,
  FormControlLayoutComponent,
  InputFieldComponent,
} from 'fui';

@Component({
  selector: 'app-advance-filter-view',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdvanceFilterComponent,
    AdvanceFilterSectionComponent,
    AdvanceFilterItemComponent,
    ComboBoxComponent,
    DateRangeComponent,
    FormControlLayoutComponent,
    InputFieldComponent,
    ButtonIconComponent,
  ],
  templateUrl: './advance-filter-view.component.html',
  styleUrl: './advance-filter-view.component.scss',
})
export class AdvanceFilterViewComponent {
  modalOpen: boolean = false;

  optionValuePayingName: {
    name: string;
    value: any;
  }[] = [
    {
      name: 'Corporate Solutions Inc.',
      value: 'Corporate Solutions Inc.',
    },
    {
      name: 'Global Ventures LLC',
      value: 'Global Ventures LLC',
    },
    {
      name: 'Innovative Dynamics Ltd.',
      value: 'Innovative Dynamics Ltd.',
    },
    {
      name: 'Synergy Partners Co.',
      value: 'Synergy Partners Co.',
    },
    {
      name: 'Pioneer Enterprises',
      value: 'Pioneer Enterprises',
    },
  ];

  selectedValuePayingName: {
    name: string;
    value: any;
  }[] = [];

  startDateForm: FormControl = new FormControl('');
  endDateForm: FormControl = new FormControl('');

  searchForm: FormControl = new FormControl('');

  /** Array to string */
  getFormattedNames(): string {
    const names = this.selectedValuePayingName.map((item) => item.name);

    if (names.length <= 3) {
      return names.join(', ');
    } else {
      const firstThree = names.slice(0, 3).join(', ');
      const remainingCount = names.length - 3;
      return `${firstThree}, ${remainingCount}+`;
    }
  }

  /** Observe for startDate changes */
  changeDateForm(event: string, param: 'start' | 'end'): void {
    if (param === 'start') {
      this.startDateForm.setValue(event);
    }
    if (param === 'end') {
      this.endDateForm.setValue(event);
    }
  }

  formatDate(dateString: string): string {
    const [day, month, year] = dateString
      .split('-')
      .map((part) => parseInt(part, 10));
    const monthNames = [
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

    return `${day} ${monthNames[month - 1]} ${year}`;
  }

  returnDateForm(): string {
    if (
      this.startDateForm.value !== null &&
      this.endDateForm.value !== null &&
      this.startDateForm.value !== '' &&
      this.endDateForm.value !== ''
    ) {
      return (
        this.formatDate(this.startDateForm.value) +
        ' to ' +
        this.formatDate(this.endDateForm.value)
      );
    } else {
      return '';
    }
  }

  actionOut(event: boolean | 'filter' | 'clear'): void {
    if (event === true || event === false) {
      this.modalOpen = event;
    }
    if (event === 'clear') {
      this.selectedValuePayingName = [];
      this.searchForm.setValue('');
      this.startDateForm = new FormControl('');
      this.endDateForm = new FormControl('');
    }
    if (event === 'filter') {
      this.modalOpen = false;
    }
  }
}
