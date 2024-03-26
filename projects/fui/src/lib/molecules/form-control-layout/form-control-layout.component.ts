import { Component, ContentChild, OnInit } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-form-control-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-control-layout.component.html',
  styleUrl: './form-control-layout.component.scss',
})
export class FormControlLayoutComponent {
  @ContentChild(InputFieldComponent) inputComponents!: InputFieldComponent;
}
