import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

/**
 * The PageSidebarComponent
 * @usage
 * ```html
 * <fui-page-sidebar>
 *  Content
 * </fui-page-sidebar>
 * ```
 * <example-url>http://localhost:4200/templates/page</example-url>
 */
@Component({
  selector: 'fui-page-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-sidebar.component.html',
  styleUrl: './page-sidebar.component.scss',
})
export class PageSidebarComponent {
  @Input({ required: true }) show: boolean = true;
  @Input() padding: 'none' | 's' | 'm' | 'l' = 'm';
  @Input() docked: boolean = true;
  @Input() width: number = 248;
  @Input() height: number = 0;
  @Output() showEvent: EventEmitter<any> = new EventEmitter();
  @Input() zIndex: number = 1;

  ngAfterViewInit(): void {
    this.logWindowWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.logWindowWidth();
  }

  logWindowWidth(): void {
    if (window.innerWidth < 1080) {
      this.docked = false;
      this.show = false;
      this.showEvent.emit(this.show);
    } else {
      this.docked = true;
      this.show = true;
      this.showEvent.emit(this.show);
    }
  }
}
