import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Color, Size } from '../../types';

@Component({
  selector: 'fui-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent {
  @Input() padding: Size = 'sizedefault';
  @Input() color!: Color;
  @Input() hasShadow: boolean = false;
  @Input() hasBorder: boolean = true;
  @Input() borderRadius: boolean = false;
  @Input() panelSplit: boolean = false;
  @Input() colorSubdued: 'start' | 'end' = 'end';
  @Input() directionSubdued: 'row' | 'column' = 'column';
  @Input() alignPanel: 'start' | 'center' | 'end' = 'start';
  @Input() wordBreak: boolean = false;
}
