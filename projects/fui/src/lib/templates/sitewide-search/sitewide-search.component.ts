import { Component, Input } from '@angular/core';
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
 * The CalloutComponent component
 * @usage
 * ```html
 * <fui-sitewide [data]="data" [searchForm]="searchForm" />
 * ```
 * <example-url>http://localhost:4200/organisms/inline-edit</example-url>
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
  @Input() placeholder: string = 'Search for anything...';
}
