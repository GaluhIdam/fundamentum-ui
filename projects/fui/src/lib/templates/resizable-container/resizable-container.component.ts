import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { ResizablePanelComponent } from './resizable-panel/resizable-panel.component';

@Component({
  selector: 'fui-resizable-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resizable-container.component.html',
  styleUrl: './resizable-container.component.scss',
})
export class ResizableContainerComponent {
  @Input({ required: true }) direction: 'vertical' | 'horizontal' =
    'horizontal';
  @ContentChildren(ResizablePanelComponent)
  contentPanel!: QueryList<ResizablePanelComponent>;
  @ViewChild('container') container?: ElementRef;
  ngAfterContentInit(): void {
    this.contentPanel.forEach((item, i) => {
      if (i === this.contentPanel.length - 1) {
        item.last = false;
      }
    });
  }
}
