import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {
  IconsComponent,
  InputComponent,
  SpacerComponent,
  TextComponent,
} from '../../../public-api';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-input-field-number',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    TextComponent,
    IconsComponent,
    SpacerComponent,
  ],
  templateUrl: './input-field-number.component.html',
  styleUrl: './input-field-number.component.scss',
})
export class InputFieldNumberComponent {
  @Input() valueInput?: any;
  @Input() showSeparator = false;
  @Input('min') minValue?: number;
  @Input() labelText?: string;
  @Input() control = new FormControl();
  @Input() controlNumber = new FormControl();
  @Input('name') errorControlName?: string;
  @Output() valueChanges = new EventEmitter();

  constructor() {}

  // @HostListener('input', ['$event'])
  // onInput(event: InputEvent) {
  //   const input = event.target as HTMLInputElement;
  //   const originalValue = input.value;

  //   // Remove non-numeric characters
  //   const numericValue = originalValue.replace(/\D/g, '');

  //   // Format with thousand separator and 2 decimal places
  //   const formattedValue = this.formatNumberWithCommas(numericValue);

  //   // Update the control value
  //   this.valueInput = formattedValue;
  //   console.log('parse float numeric ', parseFloat(numericValue));
  //   console.log('parse float numeric 2', formattedValue);

  //   let hasil = formattedValue.replace(/,/g, '');
  //   this.valueChanges.emit(parseFloat(hasil));
  // }

  // @HostListener('keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   const input = event.target as HTMLInputElement;
  //   const key = event.key;

  //   // Jika tombol yang ditekan adalah karakter non-numeric atau tidak diizinkan
  //   try {
  //     if (
  //       isNaN(Number(key)) ||
  //       key === ' ' ||
  //       key === '-' ||
  //       (key == '.' && input.value.indexOf('.') != -1) ||
  //       key === 'Backspace'
  //     ) {
  //       if (key === 'Backspace') {
  //         // Menghapus karakter sebelum kursor
  //         const start = input.selectionStart || 0;
  //         const end = input.selectionEnd || 0;
  //         if (start === end && start > 0) {
  //           const value = input.value;
  //           const newValue = value.slice(0, start - 1) + value.slice(end);
  //           input.value = newValue;
  //           input.setSelectionRange(start - 1, start - 1);
  //           input.dispatchEvent(new Event('input'));
  //           this.valueInput = newValue;
  //           let hasil = newValue.replace(/,/g, '');
  //           this.valueChanges.emit(hasil);
  //         }
  //       } else if (key == '.') {
  //         event.preventDefault();
  //       }

  //       // Menghentikan event default
  //       event.preventDefault();

  //       // Menghapus karakter yang dipilih
  //       const start = input.selectionStart || 0;
  //       const end = input.selectionEnd || 0;
  //       const value = input.value;
  //       const newValue = value.slice(0, start) + value.slice(end);
  //       input.value = newValue;

  //       // Memperbarui nilai input
  //       input.dispatchEvent(new InputEvent('input'));

  //       // Memanggil onInput untuk memastikan nilai terformat dan valueChanges terisi
  //       this.onInput(new InputEvent('input'));
  //     }
  //   } catch (err) {
  //     console.log('tidak boleh menggunakan character ', err);
  //   }
  // }

  // formatNumberWithCommas(value: string): string {
  //   const numberParts = value.split('.');
  //   const wholePart = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //   const decimalPart =
  //     numberParts.length > 1 ? `.${numberParts[1].padEnd(2, '0')}` : '';
  //   return wholePart + decimalPart;
  // }

  // coba-coba
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const key = event.key;

    try {
      if (
        !(
          (
            (key >= '0' && key <= '9') || // Angka 0-9
            key === '.' || // Titik
            key === 'Backspace'
          ) // Backspace
        )
      ) {
        event.preventDefault();
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const originalValue = input.value;

    const numericValue = originalValue.replace(/[^0-9.]/g, '');

    const formattedValue = this.formatNumberWithCommas(numericValue);

    this.valueInput = formattedValue;

    let hasil = formattedValue.replace(/,/g, '');
    let hasilAkhir = hasil === '' || hasil == '0' ? '0' : hasil;

    this.valueChanges.emit(parseFloat(hasilAkhir));
  }

  formatNumberWithCommas(value: string): string {
    const numberParts = value.split('.');
    const wholePart = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const decimalPart = numberParts.length > 1 ? `.${numberParts[1]}` : '';
    return wholePart + decimalPart;
  }
}
