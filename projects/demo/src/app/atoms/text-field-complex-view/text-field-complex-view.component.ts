import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { TextFieldComplexComponent } from '../../../../../fui/src/public-api';
interface TEST {
  nama: string;
  umur: number;
}
@Component({
  selector: 'app-text-field-view',
  standalone: true,
  imports: [TextFieldComplexComponent, ReactiveFormsModule],
  templateUrl: './text-field-complex-view.component.html',
  styleUrl: './text-field-complex-view.component.scss',
})
export class TextFieldComplexViewComponent implements OnInit, OnDestroy {
  size: 's' | 'm' | 'l' = 'm';
  textValue: FormGroup = new FormGroup({
    textField: new FormControl('Hello World!'),
  });

  myForm?: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  textFieldx: FormControl = new FormControl('Hello World!');
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
    this.myForm = this.formBuilder.group({
      firstName: ['Hello World!', [Validators.required, Validators.email]],
      lastName: ['Hello World!', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')], // Example for phone number validation
    });
    this.myForm.get('firstName')?.disable();
    this.obs = this.textFieldx.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => console.log(val));
    this.obs = this.myForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => console.log(val.firstName));
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
