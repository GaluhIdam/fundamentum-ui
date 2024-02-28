import { Component } from '@angular/core';
import { InlineEditComponent } from '../../../../../fui/src/public-api';

@Component({
  selector: 'app-inline-edit-view',
  standalone: true,
  imports: [InlineEditComponent],
  templateUrl: './inline-edit-view.component.html',
  styleUrl: './inline-edit-view.component.scss',
})
export class InlineEditViewComponent {}
