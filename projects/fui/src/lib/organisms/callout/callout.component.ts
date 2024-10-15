import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon, Size } from '../../types';
import { CommonModule } from '@angular/common';
import { IconsComponent } from '../../atoms/icons/icons.component';

/**
 * The CalloutComponent
 * @usage
 * ```html
 * <fui-callout
    [title]="'This is CallOut Primary'"
    [size]="'m'"
    [icon]="'user'"
    [color]="'primary'"
    [message]="message"
    [visibility]="visibilityPrimary"
    (onClick)="onHandleCalloutPrimary()">
 * </fui-callout>
 * ```
 * <example-url>http://localhost:4200/organisms/callout</example-url>
 */

@Component({
  selector: 'fui-callout',
  standalone: true,
  imports: [IconsComponent, CommonModule],
  templateUrl: './callout.component.html',
  styleUrl: './callout.component.scss',
})
export class CalloutComponent {
  @Input({ required: true }) title?: string;
  @Input() message?: string;
  @Input({ required: true }) color:
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger' = 'primary';
  @Input({ required: true }) size: 's' | 'm' = 'm';
  @Input({ required: true }) icon: Icon = 'user';
  @Input() iconSize: Size = 'sizem';
  @Input() content: 'text' | 'custom' = 'text';

  @Input({ required: true }) visibility: boolean = true;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  onHandleCallout(): void {
    this.onClick.emit();
  }
}
