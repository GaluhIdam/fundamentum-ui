import { Component } from '@angular/core';
import {
  CommentListComponent,
  IconsComponent,
  TimelineComponent,
  TimelineSectionComponent,
} from 'fui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline-view',
  standalone: true,
  imports: [
    TimelineComponent,
    TimelineSectionComponent,
    CommentListComponent,
    IconsComponent,
    CommonModule,
  ],
  templateUrl: './timeline-view.component.html',
  styleUrl: './timeline-view.component.scss',
})
export class TimelineViewComponent {}
