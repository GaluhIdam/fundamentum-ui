import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextFieldComplexComponent } from '../../molecules/text-field-complex/text-field-complex.component';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { ButtonIconComponent } from '../../molecules/button-icon/button-icon.component';

/**
 * The CalloutComponent component
 * @usage
 * ```html
 * <fui-inline-edit
    [size]="'l'"
    [disabled]="this.textFieldControl2.invalid"
    [validator]="this.textFieldControl2.invalid"
    [message]="'This is must be number!'"
    [textFieldControl]="textFieldControl2"
    (onSave)="funcSave2()"
    (onCancel)="funcCancel2()">
 * </fui-inline-edit>
 * ```
 * <example-url>http://localhost:4200/organisms/inline-edit</example-url>
 */
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
  /**
   * @ignore
   */
  editMode: boolean = false;

  @Input({ required: true }) textFieldControl: FormControl = new FormControl();
  @Input() readOnly: boolean = false;
  @Input() validator: boolean = false;
  @Input() disabled: boolean = false;
  @Input() message: string = '';
  @Input() size: 's' | 'm' | 'l' = 'm';
  @Output() onSave: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  onHandleSave(): void {
    this.editMode = !this.editMode;
    this.onSave.emit();
  }
  onHandleCancel(): void {
    this.editMode = !this.editMode;
    this.onCancel.emit();
  }
}
