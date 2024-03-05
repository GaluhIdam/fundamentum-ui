import { Component, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ButtonComponent,
  InputComponent,
  FieldTextComponent,
  TextComponent,
  InputFieldNumberComponent,
  IconsComponent,
} from '../../../../../fui/src/public-api';
import { CommonModule } from '@angular/common';
import { ThousandSeparatorDirective } from './../../../../../fui/src/lib/molecules/input-field-number/thousand-separator.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
    ButtonComponent,
    FieldTextComponent,
    ReactiveFormsModule,
    TextComponent,
    InputFieldNumberComponent,
    CommonModule,
    ThousandSeparatorDirective,
    IconsComponent,
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  constructor(private fb: FormBuilder) {}

  inputValue = '';
  myValue: any;

  // employee = this.fb.group({
  //   name:['', Validators.required],
  //   job:['', Validators.required]
  // });

  demo!: FormGroup;
  employee = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    job: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
  });

  onClick() {
    console.log('tester');
  }

  // onValueChanges(e: any) {
  //   this.myValue = e;
  //   console.log('demo: ', e);
  // }

  // @HostListener('keydown', ['$event.target.value'])
  // onInput(e: any) {
  //   var t = e.target.value;
  //   let numeric = t.substr(0, t.indexOf('.')) + t.substr(t.indexOf(','), 3);
  //   e.target.value =
  //     t.indexOf('.') >= 0 ? (this.myValue = numeric) : (this.myValue = t);
  // }

  onValueChanges(e: any) {
    this.myValue = e;
  }

  onSubmit() {}
}
