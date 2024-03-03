import { Component } from '@angular/core';
// import { InlineEditComponent } from 'fui';
import { FormControl, Validators } from '@angular/forms';
import { InlineEditComponent } from 'fui';

@Component({
  selector: 'app-inline-edit-view',
  standalone: true,
  imports: [InlineEditComponent],
  templateUrl: './inline-edit-view.component.html',
  styleUrl: './inline-edit-view.component.scss',
})
export class InlineEditViewComponent {
  valueText: string = 'Hello World!';
  valueText2: string = '123456789';
  textFieldControl: FormControl = new FormControl(this.valueText);
  textFieldControl2: FormControl = new FormControl(this.valueText2, [
    Validators.pattern(/^[0-9]*$/),
  ]);
  funcSave(): void {
    this.valueText = this.textFieldControl.value;
  }
  funcCancel(): void {
    this.textFieldControl.setValue(this.valueText);
  }
  funcSave2(): void {
    this.valueText2 = this.textFieldControl2.value;
  }
  funcCancel2(): void {
    this.textFieldControl2.setValue(this.valueText2);
  }
}
