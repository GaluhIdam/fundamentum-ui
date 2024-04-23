import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { Color } from '../../types';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs';

/**
 * The CalloutComponent component
 * @usage
 * ```html
 * <fui-link
    [colorLink]="'success'"
    [urlLink]="'https://www.google.com'"
    [typeLink]="'external'">
 * </fui-link>
 * ```
 * <example-url>http://localhost:4200/atoms/link</example-url>
 */

@Component({
  selector: 'fui-link',
  standalone: true,
  imports: [CommonModule, IconsComponent, RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input({ required: true }) colorLink: Color = 'text';
  @Input({ required: true }) urlLink?: string;
  @Input({ required: true }) typeLink?: 'external' | 'coloring' | 'disabled';

  currentRoute: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.getCurrentRoute();
      });
  }

  getCurrentRoute(): string {
    if (
      this.activatedRoute &&
      this.activatedRoute.firstChild &&
      this.activatedRoute.firstChild.routeConfig
    ) {
      return this.activatedRoute.firstChild.routeConfig.path || '';
    }
    return '';
  }

  /*Validator Link*/
  validatorLink(link: string): boolean {
    /*
      URL should be https://google.com !
    */
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(link);
  }

  navigateToExternalUrl() {
    window.open(this.urlLink, '_blank');
  }
}
