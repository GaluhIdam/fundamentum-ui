import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ButtonIconComponent,
  FormControlLayoutComponent,
  InputFieldComponent,
  LinkComponent,
  PopoverComponent,
} from '../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-data-grid-v2',
  standalone: true,
  imports: [
    CommonModule,
    PopoverComponent,
    ButtonIconComponent,
    FormControlLayoutComponent,
    InputFieldComponent,
    LinkComponent,
  ],
  templateUrl: './data-grid-v2.component.html',
  styleUrl: './data-grid-v2.component.scss',
})
export class DataGridV2Component {
  @Input() data: object[] = [];

  @Output() optionChange = new EventEmitter<
    'normal' | 'compact' | 'expanded'
  >();
  @Output() heightChange = new EventEmitter<'single' | 'autoFit'>();

  density: 'compact' | 'normal' | 'expanded' = 'normal';
  rowHeight: 'single' | 'autoFit' = 'single';
  fullScreen: boolean = false;

  changeOption(density: 'normal' | 'compact' | 'expanded'): void {
    this.density = density;
    this.optionChange.emit(density);
  }

  changeHeight(rowHeight: 'single' | 'autoFit'): void {
    this.rowHeight = rowHeight;
    this.heightChange.emit(rowHeight);
  }

  changeFullScreen(): void {
    this.fullScreen = !this.fullScreen;
  }

  protected _getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
