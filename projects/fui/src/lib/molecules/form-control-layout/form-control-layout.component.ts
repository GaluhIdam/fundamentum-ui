import { Component, ContentChild } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { PrependComponent } from './prepend/prepend.component';
import { AppendComponent } from './append/append.component';

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
  @ContentChild(InputFieldComponent) inputComponents!: InputFieldComponent;
  @ContentChild(PrependComponent) prependComponent!: PrependComponent;
  @ContentChild(AppendComponent) appendComponent!: AppendComponent;

  ngAfterContentInit() {
    if (this.inputComponents) {
      if (this.prependComponent) {
        this.inputComponents.prepend = true;
      }
      if (this.appendComponent) {
        this.inputComponents.append = true;
      }
    }
  }
}
