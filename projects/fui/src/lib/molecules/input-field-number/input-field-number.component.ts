import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { InputComponent } from '../../../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'fui-input-field-number',
  standalone: true,
  imports: [InputComponent, FormsModule, ReactiveFormsModule, DecimalPipe],
  providers: [DecimalPipe],
  templateUrl: './input-field-number.component.html',
  styleUrl: './input-field-number.component.scss',
})
export class InputFieldNumberComponent {
  @Input() valueInput = '';
  @Input() showSeparator = false;
  @Output() valueChanges = new EventEmitter();

  // @HostListener('keydown', ['$event'])
  // updateValue(event: KeyboardEvent) {

  // }

  constructor(private decimalPipe: DecimalPipe) {}

  // onValueC4hange(newValue: string) {
  //   // Menghapus semua karakter selain digit
  //   const numericValue = parseFloat(newValue.replace(/\D/g, ''));

  //   // Mengirimkan nilai keluar dengan event emitter
  //   this.valueChanges.emit(numericValue);
  // }

  onValueChanges(val: any) {
    let value = (val.target as HTMLInputElement).value;
    // 1
    let numericValue = value.replace(/[^0-9]/g, '');
    console.log('isi numericValue ', numericValue);
    let formattedValue = this.formatNumberWithCommas(numericValue);
    this.valueInput = formattedValue;
    console.log('tes');
    this.valueChanges.emit(this.valueInput);

    //  2
    // let numericValue = parseFloat(value.replace(/\D/g, ''));
    // if (!isNaN(numericValue)) {
    //   let formattedValue = this.decimalPipe.transform(numericValue, '1.0-2');
    //   this.valueInput += formattedValue;
    //   this.valueChanges.emit(this.valueInput);
    //   console.log('numeric', numericValue);
    // } else {
    //   value = '';
    //   this.valueInput += value;
    //   console.log('non numeric', numericValue);
    //   this.valueChanges.emit(this.valueInput);
    // }
  }
  // formatNumberWithCommas(value: string): string {
  //   const numberParts = value.split('.');
  //   let wholePart = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //   const decimalPart =
  //     numberParts.length > 1 ? `.${numberParts[1].padEnd(2, '0')}` : '.00';
  //   wholePart += decimalPart;
  //   return wholePart;
  // }
  formatNumberWithCommas(value: string): any {
    let numberParts = value.split('.');

    let wholePart = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let decimalPart =
      numberParts.length > 1 ? `.${numberParts[1].padEnd(2, '0')}` : '';
    return wholePart + decimalPart;
  }
}
