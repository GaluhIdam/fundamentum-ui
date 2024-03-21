import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TextComponent } from '../../../atoms/text/text.component';
import { IconsComponent } from '../../../atoms/icons/icons.component';
import { Color, Icon, Size } from '../../../types';

@Component({
  selector: 'fui-modal-header',
  standalone: true,
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.scss',
  imports: [TextComponent, IconsComponent],
})
export class ModalHeaderComponent {
  @Input() iconClose: Icon = 'cross';
  @Input() iconCloseSize: Size = 'sizem';
  @Input() iconCloseColor!: Color;
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter();

  onHandleCloseModal() {
    this.onCloseModal.emit();
  }
}
