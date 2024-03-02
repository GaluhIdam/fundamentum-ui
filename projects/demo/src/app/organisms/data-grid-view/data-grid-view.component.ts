import { Component } from '@angular/core';
import { DataGridComponent } from 'fui';

@Component({
  selector: 'app-data-grid-view',
  standalone: true,
  imports: [DataGridComponent],
  templateUrl: './data-grid-view.component.html',
  styleUrl: './data-grid-view.component.scss',
})
export class DataGridViewComponent {}
