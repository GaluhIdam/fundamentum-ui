import { Component } from '@angular/core';
import {
  DataSideDTO,
  SidenavComponent,
} from 'fui';

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
        size: 'sizem',
      },
      title: 'Archive',
      active: false,
      children: [
        {
          icon: {
            type: 'payment',
            size: 'sizem',
          },
          title: 'Finance',
          active: false,
          children: [
            {
              icon: {
                type: 'gear',
                size: 'sizem',
              },
              title: 'Operational',
              active: false,
            },
            {
              title: 'Event',
              icon: {
                type: 'calendar',
                size: 'sizem',
              },
              link: '/templates/side-nav/test',
              active: true,
            },
          ],
        },
        {
          icon: {
            type: 'user',
            size: 'sizem',
          },
          title: 'Employee',
          active: false,
        },
      ],
    },
    {
      icon: {
        type: 'alert',
        size: 'sizem',
      },
      link: '/templates/side-nav/test-2',
      title: 'Information',
      active: false,
    },
  ];
}
