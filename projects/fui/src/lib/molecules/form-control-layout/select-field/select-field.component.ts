import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsComponent } from '../../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-select-field',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
})
export class SelectFieldComponent {
  @Input({ required: true }) invalid: boolean = false;
  @Input({ required: true }) size: 's' | 'm' | 'l' = 'm';
  @Input() placeholder: string = 'Please type here...';
  @Input() formControlField: FormControl = new FormControl('');
  @Input({ required: true }) selectOptions?: Array<{
    label: string;
    value: any;
  }>;
  iconLeft: boolean = false;
  iconRight: boolean = false;
  active: boolean = false;
  @ContentChildren(IconsComponent) iconComponents!: QueryList<IconsComponent>;

  ngAfterContentInit() {
    this.iconComponents.forEach((item) => {
      if (item.label === 'left') {
        this.iconLeft = true;
      }
      if (item.label === 'right') {
        this.iconRight = true;
      }
    });
  }
}
