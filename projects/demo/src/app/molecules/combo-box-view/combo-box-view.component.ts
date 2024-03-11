import { Component } from '@angular/core';
import { ComboBoxComponent } from '../../../../../fui/src/public-api';

@Component({
  selector: 'app-combo-box-view',
  standalone: true,
  imports: [ComboBoxComponent],
  templateUrl: './combo-box-view.component.html',
  styleUrl: './combo-box-view.component.scss',
})
export class ComboBoxViewComponent {
  selectedValue: { name: string; value: any }[] = [];
  optionValue: { name: string; value: any }[] = [
    {
      name: 'BMW',
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
  ];

  test(): void {
    console.log(this.selectedValue);
  }
}
