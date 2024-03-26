import { Component, ContentChild } from '@angular/core';
import { CommentListComponent, IconsComponent } from '../../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-timeline-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-section.component.html',
  styleUrl: './timeline-section.component.scss',
})
export class TimelineSectionComponent {
  @ContentChild(IconsComponent) iconComponents!: IconsComponent;
  @ContentChild(CommentListComponent) commentComponents!: CommentListComponent;
}
