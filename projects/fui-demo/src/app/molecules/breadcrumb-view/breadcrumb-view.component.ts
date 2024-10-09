import { Component } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbData } from 'fui';

@Component({
  selector: 'app-breadcrumb-view',
  standalone: true,
  templateUrl: './breadcrumb-view.component.html',
  styleUrl: './breadcrumb-view.component.scss',
  imports: [BreadcrumbComponent],
})
export class BreadcrumbViewComponent {
  links = [
    { label: 'Breadcrumb1', link: '/molecules/breadcrumb' },
    { label: 'Breadcrumb2', link: '/molecules/breadcrumb/1' },
    { label: 'Breadcrumb3', link: '/molecules/breadcrumb/2' },
    { label: 'Breadcrumb4', link: '/molecules/breadcrumb/3' },
    { label: 'Breadcrumb5', link: '/molecules/breadcrumb/4' },
    { label: 'Breadcrumb6', link: '/molecules/breadcrumb/5' },
    { label: 'Breadcrumb7', link: '/molecules/breadcrumb/6' },
    { label: 'Breadcrumb8', link: '/molecules/breadcrumb/7' },
    { label: 'Breadcrumb9', link: '/molecules/breadcrumb/8' },
    { label: 'Breadcrumb10', link: '/molecules/breadcrumb/9' },
  ];

  changeBread(e: BreadcrumbData) {
    // console.log('breadcrumb', e);
  }
}
