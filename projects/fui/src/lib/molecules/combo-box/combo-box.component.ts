import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fui-combo-box',
  standalone: true,
  imports: [CommonModule, ButtonIconComponent, FormsModule],
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.scss',
})
export class ComboBoxComponent {
  @Input() selectedValue: { name: string; value: any }[] = [];
  @Input() optionValue: { name: string; value: any }[] = [];

  selectedValues: { name: string; value: any }[] = [];

  toggleSelection(item: { name: string; value: any }): void {
    const index = this.selectedValue.findIndex(
      (itm) => itm.value === item.value
    );
    if (index !== -1) {
      this.selectedValue.splice(index, 1);
    } else {
      this.selectedValue.push(item);
    }
    this.selectedValues = this.selectedValue.map((item) => item.value);
  }
}
