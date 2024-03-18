import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[fuiThousandSeparator]',
  standalone: true,
})
export class ThousandSeparatorDirective {
  constructor(private nc: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    const originalValue = input.value;

    const numericValue = originalValue.replace(/\D/g, '');

    const formattedValue = this.formatNumberWithCommas(numericValue);

    this.nc.control?.setValue(formattedValue);
  }

  formatNumberWithCommas(value: string): string {
    const numberParts = value.split('.');
    const wholePart = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const decimalPart =
      numberParts.length > 1 ? `.${numberParts[1].substr(0, 2)}` : '';
    return wholePart + decimalPart;
  }
}
