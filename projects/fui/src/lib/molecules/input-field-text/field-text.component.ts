import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputComponent, SpacerComponent } from '../../../public-api';
import {
  FormGroup,
  FormControl,
  FormControlName,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../../public-api';

@Component({
  selector: 'fui-field-text',
  standalone: true,
  imports: [
    InputComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextComponent,
    SpacerComponent,
  ],
  templateUrl: './field-text.component.html',
  styleUrl: './field-text.component.scss',
})
export class FieldTextComponent implements OnInit {
  @Input('label') labelText?: string;
  @Input() errorMessage?: string;
  @Input() control!: FormControl;
  @Output() onTextValue = new EventEmitter();
  @Output() countChanged = new EventEmitter<number>();
  ngOnInit(): void {}

  onTextChange(e: any) {
    this.onTextValue.emit(e);
  }
}
