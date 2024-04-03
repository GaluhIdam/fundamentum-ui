import { Component, ContentChildren, QueryList } from '@angular/core';
import { HeaderBreadcrumbPanelComponent } from '../header-breadcrumb-panel/header-breadcrumb-panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fui-header-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-breadcrumb.component.html',
  styleUrl: './header-breadcrumb.component.scss',
})
export class HeaderBreadcrumbComponent {
  @ContentChildren(HeaderBreadcrumbPanelComponent)
  contentComponents!: QueryList<HeaderBreadcrumbPanelComponent>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.contentComponents.length > 0) {
        this.contentComponents.first.clip = 'clip-first';
        this.contentComponents.last.clip = 'clip-last';
      }
    }, 0);
  }
}
