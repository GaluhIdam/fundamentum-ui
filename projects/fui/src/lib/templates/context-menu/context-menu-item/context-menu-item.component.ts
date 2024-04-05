import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-context-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './context-menu-item.component.html',
  styleUrl: './context-menu-item.component.scss',
})
export class ContextMenuItemComponent {
  @Input() id: string = '';
  isDisplay: boolean = false;
}
