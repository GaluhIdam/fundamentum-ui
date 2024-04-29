import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'fui-resizable-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resizable-container.component.html',
  styleUrl: './resizable-container.component.scss',
})
export class ResizableContainerComponent {
  @ViewChild('resizable') resizable?: ElementRef;
  @Input({ required: true }) direction: 'vertical' | 'horizontal' =
    'horizontal';

  last: boolean = true;
  resizing: boolean = false;
  startX: number = 0;
  resizableWidth: any = 0;
  startY: number = 0;
  resizableHeight: any = 0;

  widthResize(event: MouseEvent) {
    this.resizableWidth = this.resizable?.nativeElement.offsetWidth - 20;
    this.resizing = true;
    this.startX = event.clientX;
  }

  heightResize(event: MouseEvent) {
    this.resizableHeight = this.resizable?.nativeElement.offsetHeight - 20;
    this.resizing = true;
    this.startY = event.clientY;
  }

  @HostListener('document:mousemove', ['$event'])
  onResize(event: MouseEvent) {
    if (this.resizing) {
      const widthChange = event.clientX - this.startX;
      this.startX = event.clientX;
      this.resizableWidth = this.resizableWidth + widthChange;

      const heightChange = event.clientY - this.startY;
      this.startY = event.clientY;
      this.resizableHeight = this.resizableHeight + heightChange;

      if (this.resizableWidth + widthChange < 150) {
        this.resizing = false;
        this.resizableWidth = 150;
        this.startX = event.clientX;
      }

      if (this.resizableHeight + heightChange < 50) {
        this.resizing = false;
        this.resizableHeight = 50;
        this.startY = event.clientY;
      }
    }
  }

  @HostListener('document:mouseup', ['$event'])
  stopResize() {
    this.resizing = false;
  }
}
