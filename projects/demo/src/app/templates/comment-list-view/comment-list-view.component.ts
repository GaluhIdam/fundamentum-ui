import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CommentListComponent, Icon } from '../../../../../fui/src/public-api';

@Component({
  selector: 'app-comment-list-view',
  standalone: true,
  imports: [CommentListComponent, CommonModule],
  templateUrl: './comment-list-view.component.html',
  styleUrl: './comment-list-view.component.scss',
})
export class CommentListViewComponent {
  commentList?: {
    iconAvatar: Icon;
    iconTitle?: Icon;
    username?: string;
    action: string;
    tags?: string[];
    timestamp?: string;
    comments?: string;
    typeComment: 'commentBorder' | 'standard';
  }[] = [
    {
      iconAvatar: 'userAvatar',
      username: 'janed',
      action: 'added a comment',
      tags: ['case', 'phishing', 'security'],
      timestamp: 'Jan 11, 2020',
      comments:
        'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
      typeComment: 'commentBorder',
    },
    {
      iconAvatar: 'userAvatar',
      iconTitle: 'pencil',
      username: 'janed',
      action: 'commit [UPDATE] Update comment list',
      tags: [],
      timestamp: 'Jan 11, 2020',
      comments:
        'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
      typeComment: 'standard',
    },
    {
      iconAvatar: 'userAvatar',
      username: 'janed',
      action: 'added a tags',
      tags: ['case', 'phishing', 'security'],
      timestamp: 'Jan 11, 2020',
      comments:
        'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
      typeComment: 'standard',
    },
    {
      iconAvatar: 'userAvatar',
      iconTitle: 'pencil',
      username: 'janed',
      action: 'added a comment',
      tags: [],
      timestamp: 'Jan 11, 2020',
      comments:
        'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
      typeComment: 'commentBorder',
    },
  ];
}
