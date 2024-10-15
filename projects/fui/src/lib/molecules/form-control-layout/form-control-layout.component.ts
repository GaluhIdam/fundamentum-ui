import { Component, ContentChild } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { PrependComponent } from './prepend/prepend.component';
import { AppendComponent } from './append/append.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { TextareaComponent } from './textarea/textarea.component';

/**
 * The CalloutComponent
 * @usage
 * ```html
 * <fui-form-control-layout>
    <fui-prepend>
      <p>Prepend</p>
    </fui-prepend>

    <fui-input-field [type]="'text'" [size]="'l'" [invalid]="true">
      <fui-icons
        left-icon
        [label]="'left'"
        [icon]="'search'"
        [size]="'sizel'"
        [color]="'text'"
      />
      <fui-loading
        class="mx-5"
        right-icon
        [type]="'spinner'"
        [isLoading]="true"
        [size]="'sizel'"
      ></fui-loading>
      <fui-icons
        right-icon
        [label]="'right'"
        [icon]="'alert'"
        [size]="'sizel'"
        [color]="'danger'"
      />
    </fui-input-field>

    <fui-append>
      <p>Append</p>
    </fui-append>
    <fui-validator-field validator />
 * </fui-form-control-layout>
 * ```
 * <example-url>http://localhost:4200/organisms/callout</example-url>
 */
@Component({
  selector: 'fui-form-control-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-control-layout.component.html',
  styleUrl: './form-control-layout.component.scss',
})
export class FormControlLayoutComponent {
  @ContentChild(InputFieldComponent) inputComponent!: InputFieldComponent;
  @ContentChild(TextareaComponent) textareaComponent!: TextareaComponent;
  @ContentChild(SelectFieldComponent) selectComponent!: SelectFieldComponent;
  @ContentChild(PrependComponent) prependComponent!: PrependComponent;
  @ContentChild(AppendComponent) appendComponent!: AppendComponent;

  ngDoCheck(): void {
    if (this.prependComponent && !this.appendComponent) {
      if (this.inputComponent) {
        this.inputComponent.borderRadius = '0px 5px 5px 0px';
      }
      if (this.textareaComponent) {
        this.textareaComponent.borderRadius = '0px 5px 5px 0px';
      }
      if (this.selectComponent) {
        this.selectComponent.borderRadius = '0px 5px 5px 0px';
      }
    }
    if (this.appendComponent && !this.prependComponent) {
      if (this.inputComponent) {
        this.inputComponent.borderRadius = '5px 0px 0px 5px';
      }
      if (this.textareaComponent) {
        this.textareaComponent.borderRadius = '5px 0px 0px 5px';
      }
      if (this.selectComponent) {
        this.selectComponent.borderRadius = '5px 0px 0px 5px';
      }
    }
    if (this.appendComponent && this.prependComponent) {
      if (this.inputComponent) {
        this.inputComponent.borderRadius = '0px 0px 0px 0px';
      }
      if (this.textareaComponent) {
        this.textareaComponent.borderRadius = '0px 0px 0px 0px';
      }
      if (this.selectComponent) {
        this.selectComponent.borderRadius = '0px 0px 0px 0px';
      }
    }
    if (!this.appendComponent && !this.prependComponent) {
      if (this.inputComponent) {
        this.inputComponent.borderRadius = '5px 5px 5px 5px';
      }
      if (this.textareaComponent) {
        this.textareaComponent.borderRadius = '5px 5px 5px 5px';
      }
      if (this.selectComponent) {
        this.selectComponent.borderRadius = '5px 5px 5px 5px';
      }
    }
  }
}
