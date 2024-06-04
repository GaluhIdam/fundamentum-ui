import { Component } from '@angular/core';
import { DataSideDTO, SidenavComponent } from 'fui';

@Component({
  selector: 'app-sidenav-view',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './sidenav-view.component.html',
  styleUrl: './sidenav-view.component.scss',
})
export class SidenavViewComponent {
  dataSide: DataSideDTO[] = [
    {
      heading: 'Nav heading',
      icon: {
        type: 'folderOpen',
        size: 'sizexs',
      },
      title: 'Archive',
      active: false,
      children: [
        {
          icon: {
            type: 'payment',
            size: 'sizexs',
          },
          title: 'Finance',
          active: false,
          children: [
            {
              title: 'Operational',
              link: '/templates/side-nav/test-2',
              active: false,
            },
            {
              title: 'Event',
              icon: {
                type: 'calendar',
                size: 'sizexs',
              },
              link: '/templates/side-nav/test',
              active: true,
            },
          ],
        },
        {
          icon: {
            type: 'user',
            size: 'sizexs',
          },
          title: 'Employee',
          active: false,
        },
      ],
    },
    {
      icon: {
        type: 'alert',
        size: 'sizexs',
      },
      link: '/templates/side-nav/test-2',
      title: 'Information',
      active: false,
    },
  ];
}
