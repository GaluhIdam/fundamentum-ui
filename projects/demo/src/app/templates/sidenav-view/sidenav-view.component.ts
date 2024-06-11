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
      size: 'sizem',
      icon: {
        type: 'folderOpen',
      },
      title: 'Archive',
      active: false,
      children: [
        {
          size: 'sizem',
          icon: {
            type: 'payment',
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
              size: 'sizem',
              title: 'Event',
              icon: {
                type: 'calendar',
              },
              link: '/templates/side-nav/test',
              active: true,
            },
          ],
        },
        {
          size: 'sizem',
          icon: {
            type: 'user',
          },
          title: 'Employee',
          active: false,
        },
      ],
    },
    {
      size: 'sizem',
      icon: {
        type: 'alert',
      },
      link: '/templates/side-nav/test-2',
      title: 'Information',
      active: false,
    },
  ];
}
