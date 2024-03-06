import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonIconComponent, Icon, IconsComponent } from '../../../public-api';
import { CommonModule } from '@angular/common';

/**
 * The ButtonIconComponent component
 * @usage
 * ```html
 * <fui-comment-list
    [dataComment]="commentList!"
    [comment]="true">
 * </fui-comment-list>
 * ```
 * <example-url>http://localhost:4200/template/comment-list</example-url>
 */
@Component({
  selector: 'fui-comment-list',
  standalone: true,
  imports: [IconsComponent, CommonModule, ButtonIconComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.scss',
})
export class CommentListComponent {
  @Input({ required: true }) comment: boolean = false;
  @Input({ required: true }) dataComment: {
    iconAvatar: Icon;
    iconTitle?: Icon;
    username?: string;
    action: string;
    tags?: string[];
    timestamp?: string;
    comments?: string;
    typeComment: 'commentBorder' | 'standard';
  }[] = [];

  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  handleOnClick(): void {
    this.onClick.emit();
  }
}
