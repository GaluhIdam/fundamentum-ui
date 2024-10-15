import { Component } from '@angular/core';
import { FieldFilepickerComponent, TextComponent } from 'fui';

@Component({
  selector: 'app-field-filepicker-view',
  standalone: true,
  imports: [FieldFilepickerComponent, TextComponent],
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
