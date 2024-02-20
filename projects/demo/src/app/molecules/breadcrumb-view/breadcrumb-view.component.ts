import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../fui/src/lib/molecules/breadcrumb/breadcrumb.component';
import { BreadcrumbData } from '../../../../../fui/src/lib/types';

@Component({
  selector: 'app-breadcrumb-view',
  standalone: true,
  templateUrl: './breadcrumb-view.component.html',
  styleUrl: './breadcrumb-view.component.scss',
  imports: [BreadcrumbComponent],
})
export class BreadcrumbViewComponent {
  links = [
    { label: 'Breadcrumb1', link: '/molecule/breadcrumb' },
    { label: 'Breadcrumb2', link: 'breadcrumb2' },
    { label: 'Breadcrumb3', link: 'breadcrumb3' },
    { label: 'Breadcrumb4', link: 'breadcrumb4' },
    { label: 'Breadcrumb5', link: 'breadcrumb5' },
    { label: 'Breadcrumb6', link: 'breadcrumb6' },
    { label: 'Breadcrumb7', link: 'breadcrumb7' },
    { label: 'Breadcrumb8', link: 'breadcrumb8' },
    { label: 'Breadcrumb9', link: 'breadcrumb9' },
    { label: 'Breadcrumb10', link: 'breadcrumb10' },
  ];

  changeBread(e: BreadcrumbData) {
    console.log('breadcrumb', e);
  }
}
