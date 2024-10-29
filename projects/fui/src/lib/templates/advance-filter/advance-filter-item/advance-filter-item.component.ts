import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonIconComponent, TextComponent } from '../../../../public-api';
@Component({
  selector: 'fui-advance-filter-item',
  standalone: true,
  imports: [CommonModule, TextComponent, ButtonIconComponent],
  templateUrl: './advance-filter-item.component.html',
  styleUrl: './advance-filter-item.component.scss'
})
export class AdvanceFilterItemComponent {
  @Input({ required: true }) label: string = 'Label';
  @Input({ required: true }) value: string = 'value, value, value';

  showHide: boolean = false;

  toggleShowHide(): void {
    this.showHide = !this.showHide;
  }
}
