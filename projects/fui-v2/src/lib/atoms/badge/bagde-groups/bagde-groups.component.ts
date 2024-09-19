import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'fui-badge-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bagde-groups.component.html',
  styleUrl: './bagde-groups.component.scss',
})
export class BagdeGroupsComponent {
  @Input() maxWidth: number = 200;
  @Input() gutterSize: 's' | 'none' | 'xs' = 's';
}
