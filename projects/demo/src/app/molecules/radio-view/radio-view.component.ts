import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, RadioComponent } from 'fui';

@Component({
  selector: 'app-radio-view',
  standalone: true,
  templateUrl: './radio-view.component.html',
  styleUrl: './radio-view.component.scss',
  imports: [ReactiveFormsModule, RadioComponent, ButtonComponent],
})
export class RadioViewComponent {
  form!: FormGroup;
  errorMessageRequiredFruit: string = '';

  dataArrays: { label: string; value: string }[][] = [];

  data = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
    {
      label: 'Grape',
      value: 'grape',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.generateDataArrays();
    this.form = this.fb.group({
      fruit: ['', Validators.required],
    });
  }

  getSelectedRadioFruit(selectedFruit: string) {
    if (selectedFruit?.length) {
      this.errorMessageRequiredFruit = '';
    }
    this.form.get('fruit')?.setValue(selectedFruit);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('onsubmit', this.form.value);
    } else {
      const fruitControl = this.form.get('fruit');
      if (fruitControl?.errors) {
        if (fruitControl.errors?.['required']) {
          this.errorMessageRequiredFruit = 'Fruit field is required';
        }
      }
    }
  }

  generateDataArrays() {
    for (let i = 1; i <= 8; i++) {
      const data: { label: string; value: string }[] = [
        { label: 'Apple', value: `apple${i}` },
        { label: 'Orange', value: `orange${i}` },
        { label: 'Grape', value: `grape${i}` },
      ];
      this.dataArrays.push(data);
    }
  }
}
