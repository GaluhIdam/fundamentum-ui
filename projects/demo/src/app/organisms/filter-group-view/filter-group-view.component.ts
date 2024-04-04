import { Component } from '@angular/core';
import {
  FilterGroupButtonComponent,
  FilterGroupComponent,
} from 'fui';

@Component({
  selector: 'app-filter-group-view',
  standalone: true,
  imports: [FilterGroupComponent, FilterGroupButtonComponent],
  templateUrl: './filter-group-view.component.html',
  styleUrl: './filter-group-view.component.scss',
})
export class FilterGroupViewComponent {
  active: boolean = false;
  activeSec: boolean = false;

  onOff(value: boolean): void {
    this.active = value;
  }
  onOffSec(value: boolean): void {
    this.activeSec = value;
  }

  test(event: any): void {
    console.log(event);
  }
}
