import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {
  AppendComponent,
  AvatarComponent,
  FormControlLayoutComponent,
  IconsComponent,
  InputFieldComponent,
  PopoverComponent,
  SitewideDTO,
} from '../../../public-api';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * The SitewideSearchComponent component
 * @usage
 * ```html
 * <fui-sitewide-search
     (onClick)="goTo($event)"
     [placeholder]="'Search Component'"
     [mode]="'dark'"
     [size]="'s'"
     [data]="filteredData"
     [searchForm]="searchForm"
 *  />
 * ```
 * <example-url>http://localhost:4200/templates/sitewide</example-url>
 */
@Component({
  selector: 'fui-sitewide-search',
  standalone: true,
  imports: [
    FormControlLayoutComponent,
    InputFieldComponent,
    IconsComponent,
    AvatarComponent,
    PopoverComponent,
    CommonModule,
    ReactiveFormsModule,
    AppendComponent,
  ],
  templateUrl: './sitewide-search.component.html',
  styleUrl: './sitewide-search.component.scss',
})
export class SitewideSearchComponent {
  @Input({ required: true }) data: SitewideDTO[] = [];
  @Input({ required: true }) searchForm: FormControl = new FormControl('');
  @Input() size: 's' | 'm' | 'l' = 'm';
  @Input() mode: 'dark' | 'light' = 'light';
  @Input() placeholder: string = 'Search for anything...';
  @Output() onClick: EventEmitter<SitewideDTO> =
    new EventEmitter<SitewideDTO>();

  isOpen: boolean = false;
  handleOnClick(obj: SitewideDTO): void {
    this.isOpen = false;
    this.onClick.emit(obj);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      this.isOpen = !this.isOpen;
    }
  }
}
