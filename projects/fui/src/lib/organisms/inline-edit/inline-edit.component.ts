import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../atoms/icons/icons.component';
import { ButtonIconComponent } from '../../molecules/button-icon/button-icon.component';
import { FormControlLayoutComponent } from '../../molecules/form-control-layout/form-control-layout.component';
import { InputFieldComponent } from '../../molecules/form-control-layout/input-field/input-field.component';
import { ValidatorFieldComponent } from '../../molecules/form-control-layout/validator-field/validator-field.component';

/**
 * The CalloutComponent component
 * @usage
 * ```html
 * <h1>Inline Edit Standard</h1>
 * <fui-inline-edit
    [textFieldControl]="textFieldControl"
    (onSave)="funcSave()"
    (onCancel)="funcCancel()">
    <h1>{{ textFieldControl.value }}</h1>
 * </fui-inline-edit>

 * <h1>Inline Edit With Validation</h1>
 * <fui-inline-edit
    [size]="'l'"
    [disabled]="this.textFieldControl2.invalid"
    [validator]="this.textFieldControl2.invalid"
    [message]="'This is must be number!'"
    [textFieldControl]="textFieldControl2"
    (onSave)="funcSave2()"
    (onCancel)="funcCancel2()">
    <h1>{{ textFieldControl2.value }}</h1>
 * </fui-inline-edit>

 * ```
 * <example-url>http://localhost:4200/organisms/inline-edit</example-url>
 */
@Component({
  selector: 'fui-inline-edit',
  standalone: true,
  imports: [
    IconsComponent,
    ButtonIconComponent,
    FormControlLayoutComponent,
    InputFieldComponent,
    ValidatorFieldComponent,
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
