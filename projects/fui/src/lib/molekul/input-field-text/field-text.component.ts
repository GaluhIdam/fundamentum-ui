import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import {
  FormGroup,
  FormControl,
  FormControlName,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-field-text',
  standalone: true,
  imports: [InputComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './field-text.component.html',
  styleUrl: './field-text.component.scss',
})
export class FieldTextComponent implements OnInit {
  @Input() labelText?: string;
  @Input() errorMessage?: string;
  // @Input({ required: true, alias: 'name' }) nameAttribute?: string | undefined;
  @Input() control!: FormControl;

  @Output() onTextValue = new EventEmitter();
  @Output() countChanged = new EventEmitter<number>();
  ngOnInit(): void {}

  onTextChange(e: any) {
    this.onTextValue.emit(e);
  }
}
