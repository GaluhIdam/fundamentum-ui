import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ButtonIconComponent,
  IconsComponent,
  TextComponent,
} from '../../../public-api';
import { CommonModule } from '@angular/common';

/**
 * The FieldFilepickerComponent component
 * @usage
 * ```html
 * <fui-field-filepicker
     [files]="myFile"
     (filesSelected)="onFilesSelected($event)">
 * </fui-field-filepicker>
 * ```
 * <example-url>http://localhost:4200/molecules/field-filepicker</example-url>
 */
@Component({
  selector: 'fui-field-filepicker',
  standalone: true,
  imports: [IconsComponent, CommonModule, TextComponent, ButtonIconComponent],
  templateUrl: './field-filepicker.component.html',
  styleUrl: './field-filepicker.component.scss',
})
export class FieldFilepickerComponent {
  @Input() files: File[] = [];
  @Input() model: 'box' | 'row' = 'box';
  @Output() filesSelected: EventEmitter<File[]> = new EventEmitter<File[]>();

  /**
   * @ignore
   */
  onFileSelected(event: any): void {
    if (event.target.files) {
      this.files = Array.from(event.target.files);
      this.filesSelected.emit(this.files);
    }
  }

  /**
   * @ignore
   */
  clearFile(): void {
    this.files = [];
    this.filesSelected.emit([]);
  }
}
