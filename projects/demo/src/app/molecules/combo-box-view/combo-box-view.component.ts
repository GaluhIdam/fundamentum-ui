import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ComboBoxComponent } from 'fui';

@Component({
  selector: 'app-combo-box-view',
  standalone: true,
  imports: [ComboBoxComponent],
  templateUrl: './combo-box-view.component.html',
  styleUrl: './combo-box-view.component.scss',
})
export class ComboBoxViewComponent {
  searchMatterS: FormControl = new FormControl('', Validators.required);
  selectedValueS: { name: string; value: any }[] = [];
  optionValueS: { name: string; value: any }[] = [
    {
      name: 'Bmw',
      value: 'BMW-v',
    },
    {
      name: 'Toyota',
      value: 'Toyota-v',
    },
    {
      name: 'Volvo',
      value: 'Volvo-v',
    },
    {
      name: 'Mercedes',
      value: 'Mercedes-v',
    },
    {
      name: 'Honda',
      value: 'Honda-v',
    },
    {
      name: 'Renault',
      value: 'Renault-v',
    },
    {
      name: 'Hyundai',
      value: 'Hyundai-v',
    },
    {
      name: 'Porsche',
      value: 'Porsche-v',
    },
  ];

  searchMatterM: FormControl = new FormControl('', Validators.required);
  selectedValueM: { name: string; value: any }[] = [];
  optionValueM: { name: string; value: any }[] = [
    {
      name: 'Bmw',
      value: 'BMW-v',
    },
    {
      name: 'Toyota',
      value: 'Toyota-v',
    },
    {
      name: 'Volvo',
      value: 'Volvo-v',
    },
    {
      name: 'Mercedes',
      value: 'Mercedes-v',
    },
    {
      name: 'Honda',
      value: 'Honda-v',
    },
    {
      name: 'Renault',
      value: 'Renault-v',
    },
    {
      name: 'Hyundai',
      value: 'Hyundai-v',
    },
    {
      name: 'Porsche',
      value: 'Porsche-v',
    },
  ];

  searchMatterL: FormControl = new FormControl('', Validators.required);
  selectedValueL: { name: string; value: any }[] = [
    {
      name: 'Bmw',
      value: 'BMW-v',
    },
    {
      name: 'Toyota',
      value: 'Toyota-v',
    },
  ];
  optionValueL: { name: string; value: any }[] = [
    {
      name: 'Bmw',
      value: 'BMW-v',
    },
    {
      name: 'Toyota',
      value: 'Toyota-v',
    },
    {
      name: 'Volvo',
      value: 'Volvo-v',
    },
    {
      name: 'Mercedes',
      value: 'Mercedes-v',
    },
    {
      name: 'Honda',
      value: 'Honda-v',
    },
    {
      name: 'Renault',
      value: 'Renault-v',
    },
    {
      name: 'Hyundai',
      value: 'Hyundai-v',
    },
    {
      name: 'Porsche',
      value: 'Porsche-v',
    },
  ];

  searchMatterSS: FormControl = new FormControl('', Validators.required);
  selectedValueSS: { name: string; value: any }[] = [];
  optionValueSS: { name: string; value: any }[] = [
    {
      name: 'Bmw',
      value: 'BMW-v',
    },
    {
      name: 'Toyota',
      value: 'Toyota-v',
    },
    {
      name: 'Volvo',
      value: 'Volvo-v',
    },
    {
      name: 'Mercedes',
      value: 'Mercedes-v',
    },
    {
      name: 'Honda',
      value: 'Honda-v',
    },
    {
      name: 'Renault',
      value: 'Renault-v',
    },
    {
      name: 'Hyundai',
      value: 'Hyundai-v',
    },
    {
      name: 'Porsche',
      value: 'Porsche-v',
    },
  ];

  searchMatterMM: FormControl = new FormControl('', Validators.required);
  selectedValueMM: { name: string; value: any }[] = [];
  optionValueMM: { name: string; value: any }[] = [
    {
      name: 'Bmw',
      value: 'BMW-v',
    },
    {
      name: 'Toyota',
      value: 'Toyota-v',
    },
    {
      name: 'Volvo',
      value: 'Volvo-v',
    },
    {
      name: 'Mercedes',
      value: 'Mercedes-v',
    },
    {
      name: 'Honda',
      value: 'Honda-v',
    },
    {
      name: 'Renault',
      value: 'Renault-v',
    },
    {
      name: 'Hyundai',
      value: 'Hyundai-v',
    },
    {
      name: 'Porsche',
      value: 'Porsche-v',
    },
  ];

  searchMatterLL: FormControl = new FormControl('', Validators.required);
  selectedValueLL: { name: string; value: any }[] = [];
  optionValueLL: { name: string; value: any }[] = [
    {
      name: 'Bmw',
      value: 'BMW-v',
    },
    {
      name: 'Toyota',
      value: 'Toyota-v',
    },
    {
      name: 'Volvo',
      value: 'Volvo-v',
    },
    {
      name: 'Mercedes',
      value: 'Mercedes-v',
    },
    {
      name: 'Honda',
      value: 'Honda-v',
    },
    {
      name: 'Renault',
      value: 'Renault-v',
    },
    {
      name: 'Hyundai',
      value: 'Hyundai-v',
    },
    {
      name: 'Porsche',
      value: 'Porsche-v',
    },
  ];

  selectionS(event: any): void {
    console.log(event);
    this.selectedValueS = event;
  }
  selectionM(event: any): void {
    console.log(event);
    this.selectedValueM = event;
  }
}
