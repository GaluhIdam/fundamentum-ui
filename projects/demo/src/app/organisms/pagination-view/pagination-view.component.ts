import { Component } from '@angular/core';
import { PaginationComponent } from 'fui';

@Component({
  selector: 'app-pagination-view',
  standalone: true,
  templateUrl: './pagination-view.component.html',
  styleUrl: './pagination-view.component.scss',
  imports: [PaginationComponent],
})
export class PaginationViewComponent {
  onPageChange(event: { page: number; itemsPerPage: number }): void {
    console.log(event);
  }
}
