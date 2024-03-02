import { Component } from '@angular/core';
import { ButtonIconComponent, IconsComponent } from '../../../public-api';

@Component({
  selector: 'fui-data-grid',
  standalone: true,
  imports: [ButtonIconComponent, IconsComponent],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss',
})
export class DataGridComponent {}
