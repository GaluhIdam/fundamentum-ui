import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconsComponent } from '../icons/icons.component';
import { Color } from '../../types';

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
  imports: [CommonModule, IconsComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class LinkComponent {
  @Input({ required: true }) colorLink: Color = 'text';
  @Input() alias?: string;
  @Input({ required: true }) urlLink?: string;
  @Input({ required: true }) typeLink?:
    | 'external'
    | 'coloring'
    | 'disabled'
    | 'validation';

  /*Validator Link*/
  validatorLink(link: string): boolean {
    /*
      URL should be https://google.com !
    */
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(link);
  }
}
