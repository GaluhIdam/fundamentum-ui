import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconsComponent } from '../../../../public-api';

@Component({
  selector: 'fui-table-data-tree',
  standalone: true,
  imports: [CommonModule, IconsComponent],
  templateUrl: './table-data-tree.component.html',
  styleUrl: './table-data-tree.component.scss',
})
export class TableDataTreeComponent {
  @Input({ required: true }) showDropIcon: boolean = false;
  @Input() status: boolean = false;
  @Input() level: number = 0;
  @Output() clickOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  /** Toggle Show/Hide */
  toogle(): void {
    this.status = !this.status;
    this.clickOut.emit(this.status);
  }
}
