import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ButtonIconComponent } from '../../../public-api';
import { CommonModule } from '@angular/common';

/**
 * The CollapsibleNavComponent
 * @usage
 * ```html
 * <fui-collapsible-nav
     [show]="show"
     (onClick)="collapse()">
     <h2>I am some nav</h2>
     <p>The docked status is being stored in localStorage.</p>
 * </fui-collapsible-nav>
 * ```
 * <example-url>http://localhost:4200/template/collapsible-nav</example-url>
 */
@Component({
  selector: 'fui-collapsible-nav',
  standalone: true,
  imports: [ButtonIconComponent, CommonModule],
  templateUrl: './collapsible-nav.component.html',
  styleUrl: './collapsible-nav.component.scss',
})
export class CollapsibleNavComponent {
  @Input({ required: true }) show: boolean = false;
  @Input() docked: boolean = true;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * @ignore
   */
  handleOnClick(): void {
    this.show = !this.show;
    this.onClick.emit(this.show);
  }

  /**
   * @ignore
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.handleOnClick();
  }
}
