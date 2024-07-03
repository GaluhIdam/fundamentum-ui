import { Component } from '@angular/core';
import { Icon, Size, TabsComponent, TabsContentComponent } from 'fui';

@Component({
  selector: 'app-tabs-view',
  standalone: true,
  imports: [TabsComponent, TabsContentComponent],
  templateUrl: './tabs-view.component.html',
  styleUrl: './tabs-view.component.scss',
})
export class TabsViewComponent {
  dataTabs: {
    active: boolean | 'disabled';
    icon?: Icon;
    sideIcon?: 'right' | 'left';
    sizeIcon?: Size;
    prepend?: string;
    append?: string;
    title: string;
  }[] = [
    {
      active: true,
      title: 'Cobalt',
    },
    {
      active: false,
      title: 'Dextrose',
    },
    {
      active: 'disabled',
      icon: 'heatmap',
      sideIcon: 'left',
      sizeIcon: 'sizexs',
      title: 'Hydrogen',
    },
    {
      active: false,
      title: 'Monosodium Glutamate',
    },
  ];
}
