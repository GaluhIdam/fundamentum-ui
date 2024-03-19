import { Component } from '@angular/core';
import { FieldFilepickerComponent } from 'fui';

@Component({
  selector: 'app-field-filepicker-view',
  standalone: true,
  imports: [FieldFilepickerComponent],
  templateUrl: './field-filepicker-view.component.html',
  styleUrl: './field-filepicker-view.component.scss',
})
export class FieldFilepickerViewComponent {
  myFile: File[] = [];

  onFilesSelected(files: File[]): void {
    this.myFile = files;
    console.log(this.myFile);
  }
}
