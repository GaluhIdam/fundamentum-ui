import { Component } from '@angular/core';
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
} from '../../../../../fui/src/public-api';
import { CommonModule } from '@angular/common';

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
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  constructor(private fb: FormBuilder) {}

  myValue?: number;

  // employee = this.fb.group({
  //   name:['', Validators.required],
  //   job:['', Validators.required]
  // });

  demo!: FormGroup;
  employee = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    job: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onClick() {
    console.log('tester');
  }

  onValueChanges(e: any) {
    this.myValue = e;
    console.log(e);
  }

  onSubmit() {}
}
