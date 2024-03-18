import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, CheckboxComponent, DataCheckboxProps } from 'fui';

@Component({
  selector: 'app-checkbox-view',
  standalone: true,
  templateUrl: './checkbox-view.component.html',
  styleUrl: './checkbox-view.component.scss',
  imports: [CheckboxComponent, ReactiveFormsModule, ButtonComponent],
})
export class CheckboxViewComponent {
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
      fruits: ['', Validators.required],
    });
    this.favorite = this.fb.group({
      sports: [[], [Validators.required]],
    });
  }

  getSelectedCheckboxFruits(selectedFruit: string[]) {
    if (selectedFruit?.length) {
      this.errorMessageRequiredFruit = '';
    }
    this.form.get('fruits')?.setValue(selectedFruit);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('onsubmit', this.form.value);
    } else {
      const fruitsControl = this.form.get('fruits');
      if (fruitsControl?.errors) {
        if (fruitsControl.errors?.['required']) {
          this.errorMessageRequiredFruit = 'Fruits field is required';
        }
      }
    }
  }

  handleOnChangeOptionSport(item: DataCheckboxProps) {
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
