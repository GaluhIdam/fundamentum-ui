import { Component } from '@angular/core';
import { PanelComponent } from 'fui';

@Component({
  selector: 'app-panel-view',
  standalone: true,
  templateUrl: './panel-view.component.html',
  styleUrl: './panel-view.component.scss',
  imports: [PanelComponent],
})
export class PanelViewComponent {}
