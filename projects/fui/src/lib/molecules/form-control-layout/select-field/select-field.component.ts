import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsComponent, TextComponent } from '../../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-select-field',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TextComponent,
  ],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
})
export class SelectFieldComponent {
  @Input({ required: true }) invalid: boolean = false;
  @Input({ required: true }) size: 's' | 'm' | 'l' = 'm';
  @Input() borderRadius: string[] = ['4px', '4px', '4px', '4px'];
  @Input() placeholder: string = 'Please type here...';
  @Input() formControlField: FormControl = new FormControl('');
  @Input() disabled: boolean = false;
  @Input({ required: true }) selectOptions?: Array<{
    label: string;
    value: any;
  }>;
  iconLeft: boolean = false;
  iconRight: boolean = false;
  active: boolean = false;
  @ContentChildren(IconsComponent) iconComponents!: QueryList<IconsComponent>;

  prepend: boolean = false;
  append: boolean = false;

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

  ngOnChanges(): void {
    if (this.disabled) {
      this.formControlField.disable();
    } else {
      this.formControlField.enable();
    }
  }
}
