import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'fui-tabs-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-content.component.html',
  styleUrl: './tabs-content.component.scss',
})
export class TabsContentComponent {
  @Input() id: string = '';
  @Input() show: boolean = false;
}
