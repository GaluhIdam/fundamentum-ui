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
  InputFieldPasswordComponent,
  SpacerComponent,
  TextareaComponent,
  ImageComponent,
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
    InputFieldPasswordComponent,
    SpacerComponent,
    TextareaComponent,
    ImageComponent,
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  constructor(private fb: FormBuilder) {}

  inputValueNumber = '';
  inputValuePrice = '';
  myValueNumber: any;
  myValuePrice: any = 0;
  myValuePassword?: string;

  // employee = this.fb.group({
  //   name:['', Validators.required],
  //   job:['', Validators.required]
  // });

  demo!: FormGroup;
  employee = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    job: new FormControl('', [Validators.required, Validators.minLength(3)]),
    alamat: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl(null, [Validators.required, Validators.min(1)]),
  });

  onClick() {
    console.log('tester');
  }

  onValueChangesPassword(e: any) {
    this.myValuePassword = e;
    console.log(e);
  }
  onValueChangesNumber(e: any) {
    this.myValueNumber = e;
  }
  onValueChangesPrice(e: any) {
    this.myValuePrice = e;
  }

  onSubmit() {
    console.log(this.employee.value);
  }
}
