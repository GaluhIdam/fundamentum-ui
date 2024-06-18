import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import {
  FormControlLayoutComponent,
  IconsComponent,
  InputFieldComponent,
  PopoverComponent,
} from '../../../public-api';

/**
 * The ComboBoxComponent component
 * @usage
 * ```html
 * <fui-combo-box
    [optionValue]="optionValue"
    [selectedValue]="selectedValue">
 * </fui-combo-box>
 * ```
 * <example-url>http://localhost:4200/molecules/combo-box</example-url>
 */
@Component({
  selector: 'fui-combo-box',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent,
    FormsModule,
    FormControlLayoutComponent,
    InputFieldComponent,
    PopoverComponent,
  ],
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.scss',
})
export class ComboBoxComponent {
  @ViewChild('inputField') inputField?: ElementRef;
  @Input() size: 's' | 'm' | 'l' = 'm';
  @Input({ required: true }) selectedValue: { name: string; value: any }[] = [];
  @Input({ required: true }) optionValue: { name: string; value: any }[] = [];
  @Input() singleSelection: boolean = false;
  @Input() placeholder: string = 'Select or create options';
  @Input() comboxForm: FormControl = new FormControl('');

  /**
   * @ignore
   */
  selectedValues: { name: string; value: any }[] = [];
  openSelector: boolean = false;
  searchTerm: string = '';

  /**
   * @ignore
   */
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.selectedValue.length === 1 && this.singleSelection === true) {
      this.comboxForm.setValue(this.selectedValue[0].name);
    }
  }

  /**
   * @ignore
   */
  @HostListener('document:click', ['$event'])

  /**
   * @ignore
   */
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.openSelector = false;
    }
  }

  /**
   * @ignore
   */
  toggleSelection(item: { name: string; value: any }): void {
    if (this.singleSelection) {
      if (
        this.selectedValue.length === 1 &&
        this.selectedValue[0].value === item.value
      ) {
        // If the item is already selected, remove it
        this.selectedValue = [];
        this.comboxForm.setValue('');
      } else {
        this.comboxForm.setValue(item.name);
        // Otherwise, set it as the only selected item
        this.selectedValue = [item];
      }
      this.openSelector = false;
    } else {
      const index = this.selectedValue.findIndex(
        (itm) => itm.value === item.value
      );
      if (index !== -1) {
        this.selectedValue.splice(index, 1);
      } else {
        this.selectedValue.push(item);
      }
    }
    this.selectedValues = this.selectedValue.map((item) => item.value);
    this.searchTerm = '';
  }

  /**
   * @ignore
   */
  toggleOpenSelector(): void {
    this.openSelector = !this.openSelector;
    if (this.selectedValue.length > 0) {
      this.selectedValue.forEach((item) => {
        const index = this.selectedValue.findIndex((itm) => {
          itm.value === item.value;
          this.comboxForm.setValue(item.name);
        });
        this.selectedValues = this.selectedValue.map((item) => item.value);
      });
    }
    if (this.openSelector) {
      setTimeout(() => {
        this.inputField!.nativeElement.focus();
      });
    }
    this.searchTerm = '';
  }

  clickableOpen(): void {
    this.openSelector = true;
    if (this.selectedValue.length > 0) {
      this.selectedValue.forEach((item) => {
        const index = this.selectedValue.findIndex(
          (itm) => itm.value === item.value
        );
        this.selectedValues = this.selectedValue.map((item) => item.value);
      });
    }
    this.inputField!.nativeElement.focus();
  }

  /**
   * @ignore
   */
  toggleOpenSelectorFocus(): void {
    this.openSelector = true;
    if (this.selectedValue.length > 0) {
      this.selectedValue.forEach((item) => {
        const index = this.selectedValue.findIndex(
          (itm) => itm.value === item.value
        );
        this.selectedValues = this.selectedValue.map((item) => item.value);
      });
    }
  }

  /**
   * @ignore
   */
  toggleClearData(): void {
    this.selectedValue = [];
    this.selectedValues = [];
    this.searchTerm = '';
    this.comboxForm.setValue('');
  }

  /**
   * @ignore
   */
  calculateWidth() {
    const factor = 10;
    return this.searchTerm.length * factor + 'px';
  }

  /**
   * @ignore
   */
  isSelected(item: { name: string; value: any }): boolean {
    return this.selectedValue.some(
      (selectedItem) => selectedItem.value === item.value
    );
  }
}
