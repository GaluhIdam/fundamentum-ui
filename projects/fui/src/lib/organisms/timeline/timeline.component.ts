import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * The TimelineComponent
 * @usage
 * ```html
 * <fui-timeline>
    <h1>Timeline Example</h1>
    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'email'"></fui-icons>
      <div content>
        <p>
          <span style="font-weight: bold">janet.co</span> was invited to the
          project.
        </p>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'pencil'"></fui-icons>
      <div content>
        <p>
          The project was renamed to
          <span style="font-weight: bold">Revenue Dashboard</span>.
        </p>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'warning'"></fui-icons>
      <div content>
        <p>
          The project was renamed to
          <span style="font-weight: bold">Revenue Dashboard</span>.
        </p>
      </div>
    </fui-timeline-section>
    <!-- ------ -->
 * </fui-timeline>
 *
 * <fui-timeline>
    <h1>Comment List Example</h1>
    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'email'"></fui-icons>
      <div content>
        <p>
          <span style="font-weight: bold">janet.co</span> was invited to the
          project.
        </p>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'pencil'" [color]="'success'"></fui-icons>
      <div content>
        <p>
          The project was renamed to
          <span style="font-weight: bold">Revenue Dashboard</span>.
        </p>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'folderClosed'" [color]="'text'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'text'">
          <div header-comment>
            <p>Assistant on Jan 14, 2020, 1:39:04 PM</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'primary'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'primary'">
          <div header-comment>
            <p>Primary</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'warning'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'warning'">
          <div header-comment>
            <p>Warning</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'danger'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'danger'">
          <div header-comment>
            <p>Danger</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'text'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'text'">
          <div header-comment>
            <p>Text</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'accent'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'accent'">
          <div header-comment>
            <p>Accent</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'ghost'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'ghost'">
          <div header-comment>
            <p>Ghost</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->

    <!-- ------ -->
    <fui-timeline-section>
      <fui-icons icon [icon]="'alert'" [color]="'disabled'"></fui-icons>
      <div content>
        <fui-comment-list [color]="'disabled'">
          <div header-comment>
            <p>Disabled</p>
          </div>
          <div content-comment>An error ocurred sending your message.</div>
        </fui-comment-list>
      </div>
    </fui-timeline-section>
    <!-- ------ -->
 * </fui-timeline>
 * ```
 * <example-url>http://localhost:4200/organisms/timeline</example-url>
 */
@Component({
  selector: 'fui-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {

}
