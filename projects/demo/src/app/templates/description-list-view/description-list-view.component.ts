import { Component } from '@angular/core';
import {
  ButtonComponent,
  DescriptionListComponent,
  DescriptionListProps,
} from 'fui';

@Component({
  selector: 'app-description-list-view',
  standalone: true,
  templateUrl: './description-list-view.component.html',
  styleUrl: './description-list-view.component.scss',
  imports: [DescriptionListComponent, ButtonComponent],
})
export class DescriptionListViewComponent {
  descriptionListData: DescriptionListProps[] = [
    {
      title: 'The Elder Scrolls: Morrowind',
      description: 'The opening music alone evokes such strong memories.',
    },
    {
      title: 'TIE Fighter',
      description:
        'The sequel to XWING, join the dark side and fly for the Emperor.',
    },
    {
      title: 'Quake 2',
      description: 'The game that made me drop out of college.',
    },
  ];

  gap = 's';
  align = 'left';
}
