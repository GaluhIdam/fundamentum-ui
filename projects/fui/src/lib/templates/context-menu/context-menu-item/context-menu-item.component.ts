import { Component, Input } from '@angular/core';
/**
 * The ContextMenuItemComponent
 * @usage
 * ```html
 * <fui-context-menu-item [id]="'menu-1'">
 * </fui-context-menu-item>
 * ```
 * <example-url>http://localhost:4200/templates/context-menu</example-url>
 */

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
