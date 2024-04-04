import { Component, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
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
  ButtonEmptyComponent,
  InputSearchFieldComponent,
  TitleComponent,
} from 'fui';
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
    IconsComponent,
    InputFieldPasswordComponent,
    SpacerComponent,
    TextareaComponent,
    ImageComponent,
    ButtonEmptyComponent,
    InputSearchFieldComponent,
    TitleComponent,
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  inputValueNumber = '';
  inputValuePrice = '';
  myValueNumber: any;
  myValuePrice: any = 0;
  myValuePassword?: string;
  employee!: FormGroup;
  inputValueSearch = '';

  // employee = this.fb.group({
  //   name:['', Validators.required],
  //   job:['', Validators.required]
  // });

  // employee!: FormGroup;

  ngOnInit(): void {
    this.employee = new FormGroup({
      employeeData: new FormArray([]),
    });
  }

  onClick() {
    console.log('tester');
  }

  get employeeData() {
    return (this.employee.get('employeeData') as FormArray).controls;
  }

  addAlamat() {
    const address = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      job: new FormControl('', [Validators.required, Validators.minLength(4)]),
      number: new FormControl(0, [Validators.required, Validators.min(1)]),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      kota: new FormControl('', [Validators.required, Validators.minLength(3)]),
      others: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });

    this.employeeData.push(address);
  }

  removeAlamat() {
    this.employeeData.pop();
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
    console.log(this.myValuePrice);
  }

  onValueChangesSearch(e: any) {
    console.log('search ', e);
    this.inputValueSearch = e;
  }

  onSubmit() {
    console.log('content employe form ', this.employee);
    console.log(this.employee.value);
    this.employee.value.price = this.myValuePrice;
  }
}
