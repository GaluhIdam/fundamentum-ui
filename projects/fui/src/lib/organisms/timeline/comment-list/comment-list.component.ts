import { Component, Input } from '@angular/core';
import { Color } from '../../../types';

@Component({
  selector: 'fui-comment-list',
  standalone: true,
  imports: [],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss',
})
export class CommentListComponent {
  @Input({ required: true }) color: Color = 'text';
}
