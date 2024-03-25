import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  FormControlLayoutComponent,
  InputFieldComponent,
  PrependComponent,
  AppendComponent,
  ValidatorFieldComponent,
  IconsComponent,
  LoadingComponent,
} from 'fui';
interface TEST {
  nama: string;
  umur: number;
}
@Component({
  selector: 'app-text-field-view',
  standalone: true,
  imports: [
    FormControlLayoutComponent,
    InputFieldComponent,
    PrependComponent,
    AppendComponent,
    ValidatorFieldComponent,
    IconsComponent,
    LoadingComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './text-field-complex-view.component.html',
  styleUrl: './text-field-complex-view.component.scss',
})
export class TextFieldComplexViewComponent implements OnInit, OnDestroy {
  showPass: boolean = false;
  passwordForm: FormControl = new FormControl('LaskaJowo2024!');
  params?: string;
  size: 's' | 'm' | 'l' = 'l';
  textValue: FormGroup = new FormGroup({
    textField: new FormControl('Hello World!'),
  });

  selectOptions?: Array<{ label: string; value: any }> = [
    {
      label: 'Life for nothing',
      value: 'life',
    },
    {
      label: 'Die for everything',
      value: 'die',
    },
    {
      label: 'Confuse for something',
      value: 'confuse',
    },
  ];

  myForm?: FormGroup;
  myFormSelect?: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  textFieldx: FormControl = new FormControl('Hello World!');
  textFieldSelect: FormControl = new FormControl('');
  obs?: Subscription;

  apa: any[] = [
    {
      validator: 'required',
      message: 'This is required!',
    },
    {
      validator: 'email',
      message: 'This is email!',
    },
  ];

  ngOnInit(): void {
    this.params = this.route.snapshot.params['paramName'];
    this.myForm = this.formBuilder.group({
      firstName: ['Hello World!', [Validators.required, Validators.email]],
      lastName: ['Hello World!', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')], // Example for phone number validation
    });
    this.myFormSelect = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')], // Example for phone number validation
    });
    this.myForm.get('firstName')?.disable();
    this.obs = this.textFieldx.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => console.log(val));
    this.obs = this.myForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => console.log(val));
  }

  onSubmit(): void {
    const dto: TEST = {
      nama: this.myForm?.get('firstName')?.value,
      umur: this.myForm?.get('phoneNumber')?.value,
    };
    console.log(this.myForm!.get('firstName')?.errors);
  }
  ngOnDestroy(): void {
    this.obs?.unsubscribe();
  }
}
