import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextFieldComplexComponent } from '../../atoms/text-field-complex/text-field-complex.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from '../../molecules/button-icon/button-icon.component';

@Component({
  selector: 'fui-inline-edit',
  standalone: true,
  imports: [
    TextFieldComplexComponent,
    IconsComponent,
    ButtonIconComponent,
    CommonModule,
  ],
  templateUrl: './inline-edit.component.html',
  styleUrl: './inline-edit.component.scss',
})
export class InlineEditComponent {
  @Input() value: string = 'Hello World!';
  @Input() editMode: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() size: 'xs' | 's' | 'm' | 'l' = 'm';
  @Input() textField: FormControl = new FormControl('');
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() textFieldControl: FormControl = new FormControl(this.value);
  onHandleEdit(): void {
    this.onClick.emit();
  }
}
