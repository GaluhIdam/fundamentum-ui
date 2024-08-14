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
  searchMatter: FormControl = new FormControl('', Validators.required);
  selectedValue: { name: string; value: any }[] = [

  ];
  optionValue: { name: string; value: any }[] = [
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

  test(): void {
    console.log(this.selectedValue);
  }
}
