import { Component } from '@angular/core';
import { ResizableContainerComponent } from '../../../../../fui/src/public-api';
// import {
//   ResizableContainerComponent,
//   ResizablePanelComponent,
// } from 'fui';

@Component({
  selector: 'app-resizable-container-view',
  standalone: true,
  imports: [ResizableContainerComponent],
  templateUrl: './resizable-container-view.component.html',
  styleUrl: './resizable-container-view.component.scss',
})
export class ResizableContainerViewComponent {
}
