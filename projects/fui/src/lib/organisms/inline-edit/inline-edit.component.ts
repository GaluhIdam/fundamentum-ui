import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fui-inline-edit',
  standalone: true,
  imports: [],
  templateUrl: './inline-edit.component.html',
  styleUrl: './inline-edit.component.scss',
})
export class InlineEditComponent {
  @Input() value: string = 'Hello World!';
  @Input() editMode: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() size: 'xs' | 's' | 'm' | 'l' = 'm';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  onHandleEdit(): void {
    this.onClick.emit();
  }
}
