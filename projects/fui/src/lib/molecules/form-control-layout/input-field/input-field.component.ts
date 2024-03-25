import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { ValidatorFieldComponent } from '../validator-field/validator-field.component';
import { IconsComponent } from '../../../../public-api';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fui-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input({ required: true }) type:
    | 'text'
    | 'number'
    | 'password'
    | 'date'
    | 'time'
    | 'email' = 'text';
  @Input({ required: true }) invalid: boolean = false;
  @Input({ required: true }) size: 's' | 'm' | 'l' = 'm';
  @Input() placeholder: string = 'Please type here...';
  @Input() formControlField: FormControl = new FormControl('');
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
