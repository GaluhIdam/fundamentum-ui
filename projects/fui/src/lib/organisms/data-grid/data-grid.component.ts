import { Component } from '@angular/core';
import {
  ButtonIconComponent,
  IconsComponent,
  PaginationComponent,
} from '../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-data-grid',
  standalone: true,
  imports: [IconsComponent, ButtonIconComponent, PaginationComponent, CommonModule],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss',
})
export class DataGridComponent {
  handleButtonClick($event: any): void {
    console.log('ok');
  }

  header: string[] = [
    'Email',
    'Name',
    'Account'
  ]
}
