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
  errorMessageRequiredSport: string = '';

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

  dataSport = [
    {
      label: 'Swimming',
      value: 'swimming',
    },
    {
      label: 'Soccer',
      value: 'soccer',
    },
    {
      label: 'Volleyball',
      value: 'volleyball',
    },
  ];

  favorite!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.generateDataArrays();
    this.form = this.fb.group({
      fruit: ['', Validators.required],
    });
    this.favorite = this.fb.group({
      sports: ['', [Validators.required]],
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

  handleOnChangeOptionSport(item: any) {
    this.errorMessageRequiredSport = '';
  }

  submitSport() {
    console.log(this.favorite);
    if (this.favorite.valid) {
      console.log('onsubmit', this.favorite.value);
    } else {
      const sportsControl = this.favorite.get('sports');
      if (sportsControl?.errors) {
        if (sportsControl.errors?.['required']) {
          this.errorMessageRequiredSport = 'Sports field is required';
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
