import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon, IconsComponent } from '../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-comment-list',
  standalone: true,
  imports: [IconsComponent, CommonModule],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss',
})
export class CommentListComponent {
  @Input({ required: true }) iconAvatar: Icon = 'userAvatar';
  @Input() iconTitle: Icon = 'pencil';
  @Input({ required: true }) username?: string;
  @Input({ required: true }) actions?: string;
  @Input() tags?: string[];
  @Input({ required: true }) timestamp?: string;
  @Input() comments?: string;
  @Input({ required: true }) typeComment: 'commentBorder' | 'standard' =
    'commentBorder';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  handleOnClick(): void {
    this.onClick.emit();
  }
}
