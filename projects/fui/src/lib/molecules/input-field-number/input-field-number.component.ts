import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../../../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'fui-input-field-number',
  standalone: true,
  imports: [InputComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './input-field-number.component.html',
  styleUrl: './input-field-number.component.scss',
})
export class InputFieldNumberComponent {
  @Input() value?: any;
  @Input() showSeparator = false;
  @Output() valueChanges = new EventEmitter();

  // onValueC4hange(newValue: string) {
  //   // Menghapus semua karakter selain digit
  //   const numericValue = parseFloat(newValue.replace(/\D/g, ''));

  //   // Mengirimkan nilai keluar dengan event emitter
  //   this.valueChanges.emit(numericValue);
  // }

  onValueChanges(val: any) {
    const value = (val.target as HTMLInputElement).value;
    // const numericValue = parseFloat(value.replace(/\D/g, ''));
    // const numericValue = Intl.NumberFormat('id-ID').format(parseInt(value));
    // let numericValue = parseFloat(value.replace(/\D/g, ''));

    // this.value = numericValue.toLocaleString();
    // console.log('isi numeric: ', numericValue);
    this.value = parseInt(value);
    this.valueChanges.emit(this.value);
  }
}
