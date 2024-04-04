import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'fui-filter-group-button',
  standalone: true,
  imports: [],
  templateUrl: './filter-group-button.component.html',
  styleUrl: './filter-group-button.component.scss',
})
export class FilterGroupButtonComponent {
  @Input() withNext: boolean = false;
  @Input() value: string | number | object | [] = '';
  @Input() active: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  fullWidth: boolean = false;
  borderFirst: boolean = false;
  borderLast: boolean = false;
  withBefore: boolean = false;

  onHandleClick(): void {
    this.active = !this.active;
    this.onClick.emit({
      active: this.active,
      value: this.value,
    });
  }
}
