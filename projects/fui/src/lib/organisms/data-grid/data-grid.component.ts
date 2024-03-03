import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  IconsComponent,
  PaginationComponent,
} from '../../../public-api';

@Component({
  selector: 'fui-data-grid',
  standalone: true,
  imports: [IconsComponent, ButtonIconComponent, PaginationComponent],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss',
})
export class DataGridComponent {
  handleButtonClick($event: any): void {
    console.log('ok');
  }
}
